import {
  Box,
  Container,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";
const HomePage = () => {
  const { fetchProducts, products, isLoading } = useProductStore();
  const color = useColorModeValue("blue.800", "gray.100");
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  if (isLoading) {
    return (
      <Center h="200px">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" speed="0.65s" />
          <Text fontSize="xl" fontWeight="bold">
            Loading products...
          </Text>
        </VStack>
      </Center>
    );
  }
  if (!isLoading && products.length === 0) {
    return (
      <Text
        fontSize={"xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        color={"gray.600"}
      >
        No products found 😓{" "}
        <Link to="/create">
          <Text
            as={"span"}
            color={"blue.500"}
            _hover={{ textDecoration: "underline" }}
          >
            Create a product{" "}
          </Text>
        </Link>
      </Text>
    );
  }
  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient="linear(to-l, rgb(38, 66, 175), rgb(37, 16, 158))"
          bgClip="text"
          textAlign={"center"}
          color={color}
        >
          Current Products
        </Text>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
export default HomePage;
