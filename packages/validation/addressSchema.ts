import { z } from "zod";
import { stringSchema } from "./stringSchema";
export const addressSchema = z.object({
  estado: stringSchema,
  cidade: stringSchema,
  bairro: stringSchema,
  rua: stringSchema,
  numero: stringSchema,
  codigoPostal: stringSchema.max(8,{message: "CEP inválido"}),
  informacoesAdicionais: z.string().optional(),
});
