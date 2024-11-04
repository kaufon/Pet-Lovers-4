import { z } from "zod";
import { nameSchema } from "./index";
export const emailSchema = nameSchema.email({ message: "Email inválido" });
