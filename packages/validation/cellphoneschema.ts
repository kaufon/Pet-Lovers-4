import { z } from "zod";
import { LinkSchema, stringSchema } from "./index";
export const cellPhoneSchema = z.object({
  numero: stringSchema,
  ddd: stringSchema,
});
