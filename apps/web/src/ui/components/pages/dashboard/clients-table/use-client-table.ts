import type { ClientDto } from "@core/dtos";
import { useState } from "react";

export function useClientTable() {
  const [clientBeingDeleted, setClientBeingDeleted] =
    useState<ClientDto | null>(null);
  function handleClientDeleteSelection(client: ClientDto) {
    setClientBeingDeleted(client);
  }
  return {
    clientBeingDeleted,
    handleClientDeleteSelection,
  };
}
