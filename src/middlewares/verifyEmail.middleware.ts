import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { User } from "../entities";
import { UserRepo } from "../interfaces/user.interfaces";
import { userRepository } from "../repositories";

export const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  if (!email) {
    return next();
  }

  const user: User | null = await userRepository.findOneBy({ email });

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
