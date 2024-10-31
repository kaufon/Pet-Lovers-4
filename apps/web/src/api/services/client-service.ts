import { IApiClient, IClientService } from "@/../../packages/core";

export const ClientsService = (apiClient: IApiClient): IClientService => {
  return {
    async listUsers() {
       return await apiClient.get<any>("/cliente/clientes") 
    },
  }
};
