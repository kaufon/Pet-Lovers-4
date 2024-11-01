import type { IApiClient, IClientService } from "@core/interfaces";
import type { ClientDto } from "@core/dtos";

export const ClientsService = (apiClient: IApiClient): IClientService => {
  return {
    async listUsers() {
      return await apiClient.get<ClientDto>("/cliente/clientes");
    },
    async deleteUser(userId: number) {
      return await apiClient.delete("/cliente/excluir", { id: userId });
    },
  };
};
