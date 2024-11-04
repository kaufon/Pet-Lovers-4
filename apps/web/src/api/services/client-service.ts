import type { IApiClient, IClientService } from "@core/interfaces";
import type { CepAddress, ClientDto } from "@core/dtos";

export const ClientsService = (apiClient: IApiClient): IClientService => {
  return {
    async listClients() {
      return await apiClient.get<ClientDto[]>("/cliente/clientes");
    },
    async updateClient(partialClientDto: Partial<ClientDto>, clientId: number) {
      console.log("Updating client with:", {
        id: clientId,
        ...partialClientDto,
      });
      return await apiClient.put("/cliente/atualizar", {
        id: clientId,
        ...partialClientDto,
      });
    },
    async deleteClient(userId: number) {
      return await apiClient.delete("/cliente/excluir", { id: userId });
    },
    async registerClient(user: ClientDto) {
      return await apiClient.post("/cliente/cadastrar", user);
    },
  };
};
