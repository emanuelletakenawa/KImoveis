import { Router } from "express";
import { categoryController } from "../controllers";
import middlewares from "../middlewares";
import { categoryCreateSchema } from "../schemas/category.schema";

export const categoryRouter: Router = Router();

categoryRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateAdmin,
  middlewares.validateBody(categoryCreateSchema),
  middlewares.verifyCategoryName,
  categoryController.create
);

categoryRouter.get("", categoryController.read);

categoryRouter.get("/:id/realEstate", middlewares.verifyCategoryId, categoryController.retrieve);
