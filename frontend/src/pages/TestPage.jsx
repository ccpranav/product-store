import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
} from "@chakra-ui/react";

const TestPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  // Add debugging
  console.log("Modal isOpen state:", isOpen);

  return (
    <Box p={5}>
      <Button onClick={onOpen} colorScheme="blue" mb={4}>Open Modal</Button>
      <Text>Modal is: {isOpen ? "Open" : "Closed"}</Text>

      {isOpen && (
        <Modal 
          isOpen={true} 
          onClose={onClose}
          isCentered
          motionPreset="slideInBottom"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Hello! This modal should close properly now.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default TestPage;
