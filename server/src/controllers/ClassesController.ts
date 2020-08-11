import db from '../database/connection';

import { Request, Response } from 'express';

import convertHourToMinutes from '../utils/convertHourToMinutes';

interface scheduleItem {
  week_day: number,
  from: string,
  to: string
}

class ClassesController {
  index = async (req:Request, res:Response) => {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;
    
    if(!filters.week_day || !filters.subject || !filters.time){
      return res.status(400).json({
        error: 'Missing filters to search classes',
      });
    };

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function(){
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'users.id', '=', 'classes.user_id')
      .select(['classes.*', 'users.*']);

    return res.json(classes);
  };

  create = async (req:Request, res:Response) => {
    const { 
      name, 
      avatar, 
      whatsapp, 
      bio,
      subject,
      cost,
      schedule 
    } = req.body;
  
    const trx = await db.transaction();
  
    try{
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const insertedClassIds = await trx('classes').insert({
        subject,
        cost,
        user_id: insertedUserIds[0],
      });
    
      const classSchedule = schedule.map((obj:scheduleItem) => {
        return {
          class_id: insertedClassIds[0],
          week_day: obj.week_day,
          from: convertHourToMinutes(obj.from),
          to: convertHourToMinutes(obj.to),
        };
      });
    
      await trx('class_schedule').insert(classSchedule);
    
      await trx.commit();
    
      return res.status(201).send();
  
    } catch(err) {
      await trx.rollback();
  
      return res.status(400).json({ 
        error: 'Unexpected error while creating new class'  
      });
    }
  };
};

export default ClassesController;