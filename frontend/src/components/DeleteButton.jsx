import {
  Button,
  DeleteIcon,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const DeleteButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const toast = useToast();
  const { deleteProduct } = useProductStore();
  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <IconButton icon={<DeleteIcon />} onClick={onOpen} colorScheme="red" />
      {isOpen && (
        <Modal
          isOpen={true}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Are you sure you want to delete?</ModalBody>
            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => handleDelete(product._id)}
              >
                Yes
              </Button>
              <Button variant="ghost" onClick={onClose}>
                No
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default DeleteButton;
