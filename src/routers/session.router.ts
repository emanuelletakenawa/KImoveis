import { Router } from "express";
import middlewares from "../middlewares";
import { sessionSchema } from "../schemas/session.schema";
import { sessionController } from "../controllers";

export const sessionRouter: Router = Router();

sessionRouter.post("", middlewares.validateBody(sessionSchema), sessionController.create);
