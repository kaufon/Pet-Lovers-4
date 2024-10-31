import { useApi } from "@/src/ui/hooks/use-api";

export async function useDashboard() {
  const { clientService } = useApi();
  const data = await clientService.listUsers()
  return {
    data
  }
}
