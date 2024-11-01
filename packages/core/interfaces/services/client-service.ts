import type { ApiResponse } from "../../responses";

export interface IClientService {
  listUsers(): Promise<ApiResponse<unknown>>
  deleteUser(userId:number): Promise<ApiResponse<void>>
}
