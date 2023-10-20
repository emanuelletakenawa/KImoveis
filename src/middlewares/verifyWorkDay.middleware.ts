import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const verifyWorkDay = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const date: Date = new Date(req.body.date);
  const workDay: number = date.getDay();

  if (workDay == 0 || workDay == 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  return next();
};
