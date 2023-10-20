import { Request, Response } from "express";
import { RealEstate } from "../entities";
import { schedulesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const id: number = res.locals.id;
  const schedule: string = await schedulesServices.create(req.body, id);

  return res.status(201).json({ message: schedule });
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const id: number = +req.params.id;
  const schedules: RealEstate | null = await schedulesServices.read(id);

  return res.status(200).json(schedules);
};

export default { create, read };
