import Router from 'express';
import db from './database/connection';

const routes = Router();

import convertHourToMinutes from './utils/convertHourToMinutes';


interface scheduleItem {
  week_day: number,
  from: string,
  to: string
}

routes.post("/classes", async (req, res) => {
  
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

});

export default routes;