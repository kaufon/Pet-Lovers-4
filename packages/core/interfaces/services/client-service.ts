import type { ApiResponse } from "../../responses";
import type { CepAddress, ClientDto } from "./../../dtos";
export interface IClientService {
  listClients(): Promise<ApiResponse<ClientDto[]>>;
  deleteClient(clientId: number): Promise<ApiResponse<void>>;
  registerClient(client: ClientDto): Promise<ApiResponse<void>>;
}
