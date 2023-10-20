import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { categoryRepository } from "../repositories";
import { Category } from "../entities";

export const verifyCategoryName = async (req: Request, res: Response, next: NextFunction) => {
  const name: string = req.body.name;

  const category: Category | null = await categoryRepository.findOneBy({ name });

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
