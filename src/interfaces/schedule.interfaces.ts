import { z } from "zod";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import {
  scheduleCreateSchema,
  scheduleReadSchema,
  scheduleSchemaResponse,
} from "../schemas/schedule.schema";

export type ScheduleCreate = z.infer<typeof scheduleSchemaResponse>;
export type ScheduleCreateSchema = z.infer<typeof scheduleCreateSchema>;
export type ScheduleRead = z.infer<typeof scheduleReadSchema>;
export type ScheduleRepo = Repository<Schedule>;
