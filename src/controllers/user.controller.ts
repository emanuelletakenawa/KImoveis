import { Request, Response } from "express";
import { UserRead, UserUpdate } from "../interfaces/user.interfaces";
import { userServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user = await userServices.create(req.body);

  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.user ? res.locals.user.admin : false;
  const users: UserRead = await userServices.read(admin);

  return res.status(200).json(users);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: UserUpdate = req.body;
  const userId: number = +req.params.id;
  const user = await userServices.update(userId, payload);

  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity);

  return res.status(204).json();
};

export default { create, read, update, destroy };
