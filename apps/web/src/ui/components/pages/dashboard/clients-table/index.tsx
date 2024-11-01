import type { ClientDto } from "@core/dtos";
import {
  TableCell,
  TableBody,
  Table,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { ClientsService } from "apps/web/src/api/services";
import { DollarSign, Pen, Trash } from "lucide-react";
import { AlertModal } from "../../../commons/alert-modal";
import { useState } from "react";
import { useClientTable } from "./use-client-table";

type ClientTableProps = {
  isLoading: boolean;
  clients: ClientDto[];
  handleDeleteClient: (clientId: number) => Promise<void>;
};
export const ClientTable = ({
  isLoading,
  clients,
  handleDeleteClient,
}: ClientTableProps) => {
  const { handleClientDeleteSelection, clientBeingDeleted } = useClientTable();
  const [isAlertModalOpen, setAlertModalOpen] = useState(false);
  const openAlertModal = () => setAlertModalOpen(true);
  const closeAlertModal = () => setAlertModalOpen(false);

  return (
    <>
      <Table selectionMode="none" shadow="md">
        <TableHeader>
          <TableColumn>Nome</TableColumn>
          <TableColumn>Nome Social</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Endereços</TableColumn>
          <TableColumn>Telefones</TableColumn>
          <TableColumn>Ações</TableColumn>
        </TableHeader>
        <TableBody items={clients} isLoading={isLoading}>
          {(client) => (
            <TableRow key={client.id}>
              <TableCell> {client.nome}</TableCell>
              <TableCell> {client.nomeSocial}</TableCell>
              <TableCell>
                {" "}
                {client.email ? client.email : "Nenhum email cadastrado"}
              </TableCell>
              <TableCell>
                <div key={client.endereco.id}>
                  {client.endereco.rua}, {client.endereco.numero},{" "}
                  {client.endereco.cidade}, {client.endereco.estado},{" "}
                </div>
              </TableCell>
              <TableCell>
                {client.telefones.length > 0
                  ? client.telefones.map((cell) => (
                    <div key={cell.id}>
                      {cell.ddd}-{cell.numero}
                    </div>
                  ))
                  : "Nenhum telefone registrado"}
              </TableCell>
              <TableCell>
                <div className="flex flex-row gap-3 text-zinc-400">
                  <Tooltip content="Consumir">
                    <DollarSign />
                  </Tooltip>
                  <Tooltip content="Editar">
                    <Pen />
                  </Tooltip>
                  <Tooltip content="Deletar">
                    <Trash
                      onClick={() => {
                        handleClientDeleteSelection(client);
                        openAlertModal();
                      }}
                    />
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <AlertModal
        isOpen={isAlertModalOpen}
        isClosed={closeAlertModal}
        onConfirm={async () => {
          if (clientBeingDeleted?.id !== undefined) {
            await handleDeleteClient(clientBeingDeleted.id);
          }
          closeAlertModal();
        }}
      />
    </>
  );
};
