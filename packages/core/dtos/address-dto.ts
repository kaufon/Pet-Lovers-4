import type { LinkDto } from "./link-dto";
export type AddressDto = {
  id?: number;
  estado: string;
  cidade: string;
  informacoesAdicionais?: string;
  rua: string;
  codigoPostal: string;
  numero: string;
};
