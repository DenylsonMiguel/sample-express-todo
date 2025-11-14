import { Request, Response } from 'express';

class Controller {
  hello = async (req: Request, res: Response) => {
    res.status(200).json({ msg: 'Hello, World!' });
  };
}

const controller = new Controller();

export default controller;
