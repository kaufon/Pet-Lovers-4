import { ApiResponse } from "../../responses";

export interface IClientService {
  listUsers(): Promise<ApiResponse<any>>
}
