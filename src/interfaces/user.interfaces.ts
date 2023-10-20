import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities";
import { userCreateSchema, userReadSchema, userReturnSchema } from "../schemas/user.schema";

export type UserCreate = z.infer<typeof userCreateSchema>;
export type UserRead = z.infer<typeof userReadSchema>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserUpdate = DeepPartial<User>;

export type UserRepo = Repository<User>;
