import { NextServerApiClient } from "@/src/api/next/clients";
import { ClientsService } from "@/src/api/services/client-service";

const nextApiClient = NextServerApiClient();

nextApiClient.setBaseUrl("http://localhost:32831");
export function useApi() {
  return {
    clientService: ClientsService(nextApiClient),
  };
}
