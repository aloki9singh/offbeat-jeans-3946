import React from "react";
import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { TopPopup } from "../Components/TopPopup";
import { SecondPopup } from "./SecondPop";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { SearchIcon } from "@chakra-ui/icons";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export const Navbar = () => {
  return (
    <>
      <Box maxW="">
        <TopPopup />
      </Box>
      <Box>
        <HStack gap={5} mx={140} py={8}>
          <Text style={{ fontFamily: "Verdana" }} fontSize={20}>
            <b>SEPHORA</b>
          </Text>
          <InputGroup w={425}>
            <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
            <Input bg="#F6F6F8" placeholder=" Search" borderRadius={50} />
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
            <Text fontSize={13}>
              Hi,Alok<br/>INSIDER 0 pts
            </Text>
          </HStack>
          <HStack>
            <ModeCommentOutlinedIcon fontSize="large" />
            <FavoriteBorderOutlinedIcon fontSize="large" />
            <ShoppingBasketOutlinedIcon fontSize="large" />
          </HStack>
        </HStack>
      </Box>
      <Box bg="black"  >
        <HStack bg="black" color="white" justifyContent="space-between" mx={145} py={2}>
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
        <SecondPopup/>
      </Box>
    </>
  );
};
