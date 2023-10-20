import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";

export const verifyBusinessHours = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const hour: number = req.body.hour.substring(0, 2);

  if (hour > 18 || hour < 8) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  return next();
};
