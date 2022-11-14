import {
  Box,

  Button,
  useDisclosure,
  HStack,

  Text,
  VStack,
  Heading,

  Input,
  FormControl,
  FormLabel,
  Container,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export const Admin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");

  const [d4, setD4] = useState("");
  const [d5, setD5] = useState("");
  const [d6, setD6] = useState("");

  //   const btnRef = React.useRef();
  const handleSubmit = (e) => {
    e.PreventDefault();

    fetch(` http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id:d6,
        name: d1,
        api_featured_image: d2,
        product_type: d3,
        price: d4,
        brand: d5,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  console.log(data);
  return (
    <>
      <Box boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset">
        <Heading bg="teal" p="5">
          <Text
            p={4}
            borderRadius="50"
            boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          >
            ADMIN PAGE
          </Text>
        </Heading>
        <HStack>
          <VStack
            gap={10}
            h="800px"
            w="25%"
            bg="teal"
            pt="20"
            boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
          >
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              <b>Dashboard</b>
            </Text>
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              Shops
            </Text>
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              Products
            </Text>
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              Categories
            </Text>
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              Locations
            </Text>
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              Areas
            </Text>
            <Text
              p={4}
              borderRadius="50"
              boxShadow=" rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
            >
              Customers
            </Text>
          </VStack>

          {/* //cart */}
          {/* <Box>
              <TableContainer mt={{ base: 20, sm: 20, md: 28, lg: 32 }}>
                <Table
                  variant="simple"
                  colorScheme="gray"
                  size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
                >
                  <Thead>
                    <Tr>
                      <Th fontSize={{ base: "xs", md: "md" }}>Image</Th>
                      <Th fontSize={{ base: "xs", md: "md" }}>Product</Th>
                      <Th fontSize={{ base: "xs", md: "md" }}>Price (USD)</Th>
                      <Th fontSize={{ base: "xs", md: "md" }}>
                        Remove From Server
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {state.map((cartItem) => (
                      <Tr key={cartItem.id}>
                        <Td fontSize={{ base: "xs", md: "md" }}>
                          <Image
                            src={cartItem.api_featured_image}
                            alt="prod-img"
                            w="100px"
                            h="100px"
                          />
                        </Td>
                        <Td fontSize={{ base: "xs", md: "md" }}>
                          {cartItem.name}
                        </Td>
                        <Td fontSize={{ base: "xs", md: "md" }}>
                          {cartItem.price}
                        </Td>
                        <Td fontSize={{ base: "xs", md: "md" }}>
                          <Button
                            onClick={() =>
                              dispatch(removeFromCart(cartItem.id))
                            }
                          >
                            Remove From Server
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box> */}
          <Box style={{ margin: "220px" }}>
            <VStack mt="-100px">
              <Heading>ADD PRODUCTS</Heading>
              <FormControl w={"2xl"}>
                <FormLabel> NAME:-</FormLabel>
                <Input
                  name="name"
                  onChange={(e) => setD1(e.target.value)}
                  type="text"
                  placeholder="name"
                />
                <FormLabel> PRODUCT_TYPE:-</FormLabel>

                <Input
                  name="product_type"
                  onChange={(e) => setD2(e.target.value)}
                  type="text"
                  placeholder="product_type"
                />
                <FormLabel> PRODUCT_ID:-</FormLabel>

                <Input
                  name="id"
                  onChange={(e) => setD6(e.target.value)}
                  type="number"
                  placeholder="product_type"
                />

                <FormLabel> PRODUCT_IMAGE:-</FormLabel>
                <Input
                  name="api_featured_image"
                  onChange={(e) => setD3(e.target.value)}
                  
                  placeholder="api_featured_image"
                />

                <FormLabel> PRODUCT_BRAND:-</FormLabel>
                <Input
                  name="brand"
                  onChange={(e) => setD4(e.target.value)}
                  type="text"
                  placeholder="brand"
                />

                <FormLabel>PRODUCT_PRICE:-</FormLabel>
                <Input
                  name="price"
                  onChange={(e) => setD5(e.target.value)}
                  type="number"
                  placeholder="price"
                />
                <Button colorScheme="facebook" onSubmit={handleSubmit}>
                  Submit
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </>
  );
};
