import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const verifyOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = parseInt(req.params.id);
  const userId: number = parseInt(res.locals.decoded.sub);
  const isAdmin: boolean = res.locals.decoded.admin;

  if (isAdmin == false && id != userId) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};
