import React from "react";
import { Box, Container, HStack, Text } from "@chakra-ui/react";
import { TopPopup } from "../Components/TopPopup";
import IosFonts  from "./Components/Fontgive"
export const Home = () => {
  return (
    <>
      <Box maxW="">
        <TopPopup />
      </Box>
      <Box>
        <Text fontFamily="helvetica neue">SEPHORA</Text>
      </Box>
    <Fontgive/>
    </>
  );
};
