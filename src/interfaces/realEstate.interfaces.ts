import { z } from "zod";

import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import {
  realEstateSchema,
  realEstateReadSchema,
  realEstateReturnSchema,
  realEstateCreateSchema,
} from "../schemas/realEstate.schema";

export type RealEstateCreate = z.infer<typeof realEstateCreateSchema>;
export type RealEstateRead = z.infer<typeof realEstateReadSchema>;
export type RealEstateReturn = z.infer<typeof realEstateReturnSchema>;
export type RealEstateRepo = Repository<RealEstate>;
export type TRealEstate = z.infer<typeof realEstateSchema>;
