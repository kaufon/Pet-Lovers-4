import type { CellPhoneDto, LinkDto, AddressDto } from "./index";

export type ClientDto = {
  id?: number;
  nome: string;
  nomeSocial: string;
  email: string | undefined;
  endereco: AddressDto;
  telefones: CellPhoneDto[];
};
