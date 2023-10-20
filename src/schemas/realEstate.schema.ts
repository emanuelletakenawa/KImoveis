import { z } from "zod";
import { addressCreateSchema, addressSchema } from "./address.schema";
import { categorySchema } from "./category.schema";

export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(() => false),
  value: z.string().or(z.number()).default(0),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressCreateSchema,
  categoryId: z.number().positive(),
});

export const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true,
  })
  .extend({
    address: z.object({
      street: z.string().max(45),
      zipCode: z.string().max(8),
      number: z.number(),
      city: z.string().max(20),
      state: z.string().max(2),
    }),
    categoryId: z.number().int(),
  });

export const realEstateReadSchema = realEstateSchema.array();

export const realEstateReturnSchema = realEstateSchema.extend({
  address: addressSchema,
  category: categorySchema,
});
