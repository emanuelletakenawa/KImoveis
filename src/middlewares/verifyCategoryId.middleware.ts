import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepository } from "../repositories";
import { AppError } from "../error";

export const verifyCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const bodyId: number = Number(req.body.categoryId);
  const paramsId: number = Number(req.params.id);

  if (bodyId) {
    const category: Category | null = await categoryRepository.findOneBy({
      id: bodyId,
    });
    if (!category) {
      throw new AppError("Category not found", 404);
    }
    res.locals = { ...res.locals, category };
  }

  if (paramsId) {
    const category: Category | null = await categoryRepository.findOneBy({
      id: paramsId,
    });
    if (!category) {
      throw new AppError("Category not found", 404);
    }
    res.locals = { ...res.locals, category };
  }

  return next();
};
