import Responsive from "../Components/Responsive";
import Featured from "../Components/Featured";
import Guidance from "../Components/Guidance";
import { Threepic } from "../Components/Threepic";

import { Footer } from "../Components/Footer";
import MidSection from "../Components/MidSection";
 import  Product  from "./Product";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { TopPopup } from "../Components/TopPopup";
 import { Log } from "../Components/Log";
import { SecondPopup } from "../Components/SecondPop";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import { SearchIcon } from "@chakra-ui/icons";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import axios from "axios";
import Mid2 from "../Components/Mid2";

const getData = (query) => {
  return axios.get(`http://localhost:3000/products?product_type=${query}`);
};
export const Home = () => {
  const navigate = useNavigate();
  const [v, setV] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { state, dispatch } = useContext(CartContext);
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

  const handlehome =()=>{
     navigate("/")
  }  ;
  const handleClic=()=>{
    navigate("/cart")
  }
  console.log(data);
  if ((data == "")) {
    return (
      <>
        <Box maxW="">
          <TopPopup />
        </Box>
        <Box>
          <HStack gap={5} mx={140} py={8}>
            <Text onClick={handlehome} style={{ fontFamily: "Verdana" }} fontSize={20}>
             <b>SEPHORA</b> 
            </Text>
            <InputGroup w={425}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
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
        <Responsive />

        <MidSection />
        <Featured />
        <Guidance />
        <Divider />
        <Mid2 />
        <Divider />

        <Threepic />
        <Text marginBottom="-40px" bg="#EEEEEE" py={3}>
          <b>Website feedback? Let us know ▸</b>
        </Text>
        {/* <Product/> */}
        <Footer />
      </>
    );
  }else{
    return (
      <>
      
      <Box maxW="">
          <TopPopup />
        </Box>
        <Box>
          <HStack gap={5} mx={140} py={8}>
            <Text onClick={handlehome}  style={{ fontFamily: "Verdana" }} fontSize={20}>
              <b>SEPHORA</b>
            </Text>
            <InputGroup w={425}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon />}
              />
              <Input
                value={v}
                onChange={(e) => {
                  setV(e.target.value);

                  console.log(v);
                }}
                bg="#F6F6F8"
                placeholder=" Search"
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
              <ShoppingBasketOutlinedIcon fontSize="large" onClick={handleClic}/>
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
        {/* //middata */}
      
       <Product data={data}/>

        {/* footer */}

        <Text marginBottom="-40px" bg="#EEEEEE" py={3}>
          <b>Website feedback? Let us know ▸</b>
        </Text>
        {/* <Product/> */}
        <Footer />
      
      </>

    )
  }

  //fontFamily: 'Verdana'
};
