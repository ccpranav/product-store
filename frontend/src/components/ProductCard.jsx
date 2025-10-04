import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { createPortal } from "react-dom";

import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
  useDisclosure,
  useToast,
  VStack,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

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
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.900");
  //   const modal = (
  //     <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnOverlayClick>
  //       <ModalOverlay />
  //       <ModalContent>
  //         <ModalHeader>Edit Product</ModalHeader>
  //         <ModalCloseButton />
  //         <ModalBody>
  //           <VStack spacing={4}>
  //             <Input placeholder="Name" name="name" />
  //             <Input placeholder="Price" name="price" type="number" />
  //             <Input placeholder="Image URL" name="image" />
  //           </VStack>
  //         </ModalBody>
  //         <ModalFooter>
  //           <Button colorScheme="blue" mr={3}>
  //             Update
  //           </Button>
  //           <Button variant="ghost" onClick={onClose}>
  //             Cancel
  //           </Button>
  //         </ModalFooter>
  //       </ModalContent>
  //     </Modal>
  //   );
  const modal = (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>HI</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  return (
    <Box
      bg={bg}
      shadow="lg"
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.2s"}
      _hover={{
        transform: "translateY(-5px)",
        shadow: "xl",
      }}
    >
      <Image
        src={product.image}
        alt="{product.name}"
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme="blue" />
          <IconButton
            icon={<DeleteIcon />}
            onClick={() => handleDelete(product._id)}
            colorScheme="red"
          />
        </HStack>
      </Box>
      {createPortal(modal, document.body)}
    </Box>
  );
};

export default ProductCard;
