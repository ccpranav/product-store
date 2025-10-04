import {
  Button,
  DeleteIcon,
  EditIcon,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from "@chakra-ui/icons";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const UpdateButton = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const { updateProduct } = useProductStore();
  const toast = useToast();

  const handleUpdate = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
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
    onClose();
  };
  return (
    <>
      <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
      {isOpen && (
        <Modal
          isOpen={true}
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update Product</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <VStack spacing={"4"}>
                <Input
                  placeholder="Product Name"
                  name="name"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Product Price"
                  name="price"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                />
                <Input
                  placeholder="Product Image"
                  name="image"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                />
              </VStack>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => handleUpdate(product._id, updatedProduct)}
              >
                Update
              </Button>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default UpdateButton;
