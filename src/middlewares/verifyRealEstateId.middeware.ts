import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { realEstateRepository } from "../repositories";

export const verifyRealEstateId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateId: number = req.body.realEstateId ? req.body.realEstateId : +req.params.id;

  const isRealEstate = await realEstateRepository.findOne({
    where: { id: realEstateId },
  });

  if (!isRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  res.locals.realEstate = realEstateId;

  return next();
};
