import {
  Container,
  Flex,
  Text,
  Link,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          bgGradient={
            colorMode === "light"
              ? "linear(to-l,rgb(38, 66, 175),rgb(37, 16, 158))"
              : "linear(to-l,rgb(239, 239, 243),rgb(116, 116, 119))"
          }
          bgClip="text"
          fontSize={{ base: "22", sm: "28 " }}
          fontWeight="bold"
        >
          <Link href={"/"}>Product Store</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link href="/create">
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
