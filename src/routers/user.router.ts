import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";
import { userController } from "../controllers";

export const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.verifyEmail,
  userController.create
);

userRouter.get("", middlewares.verifyToken, middlewares.validateAdmin, userController.read);

userRouter.use("/:id", middlewares.verifyId, middlewares.verifyToken);

userRouter.patch(
  "/:id",
  middlewares.verifyOwner,
  middlewares.validateBody(userUpdateSchema),
  userController.update
);

userRouter.delete("/:id", middlewares.validateAdmin, userController.destroy);
