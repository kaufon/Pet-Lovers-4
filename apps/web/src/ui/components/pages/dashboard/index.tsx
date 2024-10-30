"use client";
import React, { useState } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { DollarSign, Pen, Trash } from "lucide-react";
import { RegisterClientForm } from "./register-client-form";
import { AlertModal } from "../../commons/alert-modal";
import { ConsumeForm } from "./consume-form";

export const DashBoardPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAlertModalOpen, setAlertModalOpen] = useState(false);
  const [isConsumeModalOpen, setConsumeModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const openModal = (isEditingMode: boolean = false) => {
    setModalOpen(true);
    setIsEditing(isEditingMode);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsEditing(false);
  };

  const openAlertModal = () => setAlertModalOpen(true);
  const closeAlertModal = () => setAlertModalOpen(false);

  const openConsumeModal = () => setConsumeModalOpen(true);
  const closeConsumeModal = () => setConsumeModalOpen(false);

  return (
    <>
      <Button color="default" onClick={() => openModal(false)}>
        Adicionar Cliente
      </Button>
      <Table selectionMode="single" shadow="md">
        <TableHeader>
          <TableColumn>ID</TableColumn>
          <TableColumn>Nome</TableColumn>
          <TableColumn>CPF</TableColumn>
          <TableColumn>Pets</TableColumn>
          <TableColumn>Ações</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>ID do Joaozinho</TableCell>
            <TableCell>Nome do Joaozinho</TableCell>
            <TableCell>Cpf do Joaozinho</TableCell>
            <TableCell>Pets do Joaozinho</TableCell>
            <TableCell>
              <div className="flex flex-row gap-3 text-zinc-400">
                <Tooltip content="Consumir">
                  <DollarSign onClick={openConsumeModal} />
                </Tooltip>
                <Tooltip content="Editar">
                  <Pen onClick={() => openModal(true)} />
                </Tooltip>
                <Tooltip content="Deletar">
                  <Trash onClick={openAlertModal} />
                </Tooltip>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <RegisterClientForm
        isOpen={isModalOpen}
        isClosed={closeModal}
        isRegister={!isEditing} // Register when not editing
      />
      <ConsumeForm isOpen={isConsumeModalOpen} isClosed={closeConsumeModal} />
      <AlertModal isOpen={isAlertModalOpen} isClosed={closeAlertModal} />
    </>
  );
};


