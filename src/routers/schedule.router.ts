import { Router } from "express";
import middlewares from "../middlewares";
import { scheduleCreateSchema } from "../schemas/schedule.schema";
import { scheduleController } from "../controllers";

export const scheduleRouter: Router = Router();

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleCreateSchema),
  middlewares.verifyUserSchedule,
  middlewares.verifyRealEstateId,
  middlewares.verifyWorkDay,
  middlewares.verifyBusinessHours,
  middlewares.verifySchedule,
  scheduleController.create
);

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  middlewares.verifyRealEstateId,
  scheduleController.read
);
