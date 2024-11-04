import type { LinkDto } from "./link-dto";
export type AddressDto = {
  id?: number;
  bairro: string
  estado: string;
  cidade: string;
  informacoesAdicionais?: string;
  rua: string;
  codigoPostal: string;
  numero: string;
};
