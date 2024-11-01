"use client";
import {
  Button
} from "@nextui-org/react";
import { useState } from "react";
import { ClientTable } from "./clients-table";
import { RegisterClientForm } from "./register-client-form";
import { useDashboard } from "./use-dashboard";

export const DashBoardPage = () => {
  const { clients, isLoading, deleteClient } = useDashboard();
  const [isModalOpen, setModalOpen] = useState(false);
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

  const openConsumeModal = () => setConsumeModalOpen(true);
  const closeConsumeModal = () => setConsumeModalOpen(false);

  return (
    <>
      <Button color="default" onClick={() => openModal(false)}>
        Adicionar Cliente
      </Button>
      <ClientTable
        clients={clients}
        isLoading={isLoading}
        handleDeleteClient={deleteClient}
      />
      <RegisterClientForm
        isOpen={isModalOpen}
        isClosed={closeModal}
        isRegister={!isEditing} // Register when not editing
      />
    </>
  );
};
