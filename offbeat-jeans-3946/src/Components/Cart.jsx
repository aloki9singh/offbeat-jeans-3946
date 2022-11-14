import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Button,
  Center,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  HStack,
  Image,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import { checkout, removeFromCart } from "../Context/CartContext/action";
import { Footer } from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { TopPopup } from "../Components/TopPopup";
import { Log } from "../Components/Log";
import { SecondPopup } from "../Components/SecondPop";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { SearchIcon } from "@chakra-ui/icons";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";


import axios from "axios";
// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;
const getData = (query) => {
  return axios.get(`http://localhost:3000/products?product_type=${query}`);
};

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  const handleCheckout = () => {
    dispatch(checkout());
    onClose();
  };
  const [v, setV] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData(v)
      .then((res) => {
        setData(res.data);
        setError(false);
      })
      .catch(() => {
        setError(true);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [v]);

  const handlehome = () => {
    navigate("/");
  };
  const handleClic = () => {
    navigate("/cart");
  };
  return (
    <>
      <Box maxW="">
        <TopPopup />
      </Box>
      <Box>
        <HStack gap={5} mx={140} py={8}>
          <Text
            onClick={handlehome}
            style={{ fontFamily: "Verdana" }}
            fontSize={20}
          >
            <b>SEPHORA</b>
          </Text>
          <InputGroup w={425}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input
              value={v}
              onChange={(e) => {
                setV(e.target.value);

                console.log(v);
              }}
              bg="#F6F6F8"
              placeholder=" Search mascara, lipstick, eyebrow etc.."
              borderRadius={50}
            />
          </InputGroup>
          <HStack>
            <StoreMallDirectoryOutlinedIcon fontSize="medium" />
            <VStack w="100px">
              <Text fontSize={12} w={400}>
                <b>Stores and Services</b>{" "}
                <Text fontSize={10}>Choose Your Store</Text>
              </Text>
            </VStack>
          </HStack>
          <HStack>
            <PeopleSharpIcon fontSize="medium" />
            <Text fontSize={14}> Community</Text>
          </HStack>
          <HStack>
            <Image
              w={9}
              src="https://www.sephora.com/img/ufe/icons/me-active.svg"
            />
            <Log />
          </HStack>
          <HStack>
            <ModeCommentOutlinedIcon fontSize="large" />
            <FavoriteBorderOutlinedIcon fontSize="large" />
            <ShoppingBasketOutlinedIcon fontSize="large" onClick={handleClic} />
          </HStack>
        </HStack>
      </Box>
      <Box bg="black">
        <HStack
          bg="black"
          color="white"
          justifyContent="space-between"
          mx={145}
          py={2}
        >
          <Text>New</Text>
          <Text>Brands</Text>
          <Text>Makeup</Text>
          <Text>Skincare</Text>
          <Text>Hair</Text>
          <Text>Fragrance</Text>
          <Text>Tools & Brushes</Text>
          <Text>Bath & Body</Text>
          <Text>Mini Size</Text>
          <Text>Gifts</Text>
          <Text>Beauty Under $20</Text>
          <Text>Sale & Offers</Text>
        </HStack>
      </Box>
      <Box>
        <SecondPopup />
      </Box>
      {/* //cart */}
      <Box>
        <TableContainer ml={20} mt={{ base: 20, sm: 20, md: 28, lg: 32 }}>
          <Table
            variant="simple"
            colorScheme="gray"
            size={{ base: "sm", sm: "sm", md: "md", lg: "lg" }}
        
          >
            <TableCaption>No Exchange | No Refunds</TableCaption>
            <Thead>
              <Tr>
             
                <Th fontSize={{ base: "xs", md: "md" }}>Product</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>Price (INR)</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>Image</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>Remove From Cart</Th>
              </Tr>
            </Thead>
            <Tbody>
              {state.map((cartItem) => (
                <Tr key={cartItem.id}>
                  
                  <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.name}</Td>
                  <Td fontSize={{ base: "xs", md: "md" }}>{cartItem.price}</Td>
                  <Td fontSize={{ base: "xs", md: "md" }}><Image src={cartItem.api_featured_image}  alt="prod-img"
                        w="100px"
                        h="100px"/></Td>
                  <Td fontSize={{ base: "xs", md: "md" }}>
                    <Button
                      onClick={() => dispatch(removeFromCart(cartItem.id))}
                    >
                      Remove From Cart
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th fontSize={{ base: "xs", md: "md" }}>Final Price</Th>
                <Th fontSize={{ base: "xs", md: "md" }}>
                  {Math.round(state.reduce((a, c) => a + c.price, 0))}
                </Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Center mt={{ base: 4, md: 8 }}>
          <Button variant="outline" colorScheme="gray" onClick={onOpen}>
            Place Order
          </Button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Place Order
                </AlertDialogHeader>
                <AlertDialogBody>
                  Are you sure you want to place ?
                </AlertDialogBody>
                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose} ml={3}>
                    cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleCheckout} ml={3}>
                    Yes
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Center>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;

//
//https://6368f280d2880d1f5dbdd365--clever-faloodeh-9466a3.netlify.app
//
