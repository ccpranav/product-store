import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

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
  VStack,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.900");

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
          <UpdateButton product={product} />
          <DeleteButton product={product} />
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;
