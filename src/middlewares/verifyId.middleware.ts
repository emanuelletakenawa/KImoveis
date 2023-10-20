import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { User } from "../entities";
import { AppError } from "../error";

export const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number = Number(req.params.id);
  const foundEntity: User | null = await userRepository.findOneBy({ id });

  if (!foundEntity) throw new AppError("User not found", 404);

  res.locals.foundEntity = foundEntity;

  return next();
};
