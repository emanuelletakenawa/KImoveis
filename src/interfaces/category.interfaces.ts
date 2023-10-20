import { z } from "zod";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { categoryCreateSchema, categoryReadSchema } from "../schemas/category.schema";

export type CategoryCreate = z.infer<typeof categoryCreateSchema>;
export type CategoryRead = z.infer<typeof categoryReadSchema>;
export type CategoryRepo = Repository<Category>;
