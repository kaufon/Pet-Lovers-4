"use client";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { ClientTable } from "./clients-table";
import { RegisterClientForm } from "./register-client-form";
import { useDashboard } from "./use-dashboard";
import { Drawer } from "../../commons/drawer";

export const DashBoardPage = () => {
  const { clients, isLoading, deleteClient } = useDashboard();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isConsumeModalOpen, setConsumeModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <div className="space-y-5 p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Bem vindo ao Pet Lovers!</h1>
          <Drawer
            trigger={
              <Button className=" flex  text-white bg-blue-300  justify-center">
                Adicionar cliente
              </Button>
            }
          >
            {(onClose) => (
              <RegisterClientForm onCancel={onClose} onSubmit={onClose} />
            )}
          </Drawer>
        </div>
        <div className="flex flex-col">
          <ClientTable
            clients={clients}
            isLoading={isLoading}
            handleDeleteClient={deleteClient}
          />
        </div>
      </div>
    </>
  );
};
