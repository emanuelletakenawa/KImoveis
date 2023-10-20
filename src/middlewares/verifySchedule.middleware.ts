import { Request, Response, NextFunction } from "express";
import { Schedule } from "../entities";
import { AppError } from "../error";
import { scheduleRepository } from "../repositories";

export const verifySchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateId: number = req.body.realEstateId;
  const date: Date | string = req.body.date;
  const hour: Date | string = req.body.hour;

  const userSchedules: Schedule | null = await scheduleRepository
    .createQueryBuilder("schedules")
    .where("schedules.realEstateId = :realEstateId", {
      realEstateId: realEstateId,
    })
    .andWhere("schedules.date = :date", { date: date })
    .andWhere("schedules.hour = :hour", { hour: hour })
    .getOne();

  if (userSchedules)
    throw new AppError("Schedule to this real estate at this date and time already exists", 409);

  return next();
};
