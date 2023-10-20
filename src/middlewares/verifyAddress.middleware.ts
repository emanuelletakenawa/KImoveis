import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { AppError } from "../error";
import addressRepository from "../repositories/address.repository";

export const verifyAddress = async (req: Request, res: Response, next: NextFunction) => {
  const address: Address = req.body.address;
  const validAddress: boolean = await addressRepository.exist({
    where: {
      street: address.street,
      zipCode: address.zipCode,
      city: address.city,
      state: address.state,
    },
  });

  if (validAddress) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};
