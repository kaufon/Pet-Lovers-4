import type { ApiResponse } from "../../responses";
import type { CepAddress, ClientDto } from "./../../dtos";
export interface IClientService {
  getClient(clientId:number): Promise<ApiResponse<ClientDto>>
  listClients(): Promise<ApiResponse<ClientDto[]>>;
  updateClient(
    partialClientDto: Partial<ClientDto>,
    clientId: number,
  ): Promise<ApiResponse<void>>;
  deleteClient(clientId: number): Promise<ApiResponse<void>>;
  registerClient(client: ClientDto): Promise<ApiResponse<void>>;
}
