import { Router } from "express";
import middlewares from "../middlewares";
import { realEstateCreateSchema } from "../schemas/realEstate.schema";
import { realEstateController } from "../controllers";

export const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.verifyCategoryId,
  middlewares.verifyAddress,
  realEstateController.create
);

realEstateRouter.get("", realEstateController.read);
