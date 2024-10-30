import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { X } from "lucide-react";
import React from "react";
type ConsumeFormProps = {
  isOpen: boolean
  isClosed: VoidFunction
}
export const ConsumeForm  = ({
  isOpen,
  isClosed
}:ConsumeFormProps) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={isClosed}>
        <ModalContent>
          {(onClose) => (
            <div>
              <ModalHeader>
                <div className="w-full flex justify-between items-center">
                  <h1>Registrar Cliente</h1>
                </div>
              </ModalHeader>
              <ModalBody>
                <Select label="Tipo">
                  <SelectItem key={"Product"}>Produto</SelectItem>
                  <SelectItem key={"Serviço"}>Serviço</SelectItem>
                </Select>
                <Select label="Serviço ou Produto">
                  <SelectItem key={"Product"}>Produto 1</SelectItem>
                  <SelectItem key={"Serviço"}>Serviço 1</SelectItem>
                  <SelectItem key={"Serviço"}>Serviço 2</SelectItem>
                </Select>
                <Input label="Quantia" type="number" />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  className="text-red-600 bg-opacity-20"
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  color="success"
                  className="text-green-600 bg-opacity-20"
                  onPress={onClose}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};


