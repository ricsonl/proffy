import db from '../database/connection';

import { Request, Response, response } from 'express';

class ConnectionsController {
  index = async (req:Request, res:Response) => {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return res.json({ total });
  };

  create = async (req:Request, res:Response) => {
    const { user_id } = req.body;

    await db('connections').insert({
      user_id
    });

    return res.status(201).send();
  };

};

export default ConnectionsController;