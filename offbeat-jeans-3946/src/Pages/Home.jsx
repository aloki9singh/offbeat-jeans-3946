import React from "react";

import BelowNav from "../Components/BelowNav";
import Responsive from "../Components/Responsive";
import { Navbar } from "../Components/Navbar";

import Featured from "../Components/Featured";
import Guidance from "../Components/Guidance";
import { Threepic } from "../Components/Threepic";
import { Divider, Spacer,Text } from "@chakra-ui/react";
import { Footer } from "../Components/Footer";
import MidSection from "../Components/MidSection";

export const Home = () => {
  return (
    <>
      <Navbar />
      {/* <BelowNav /> */}
       <Responsive/> 
       
       <MidSection/>
      <Featured />
      <Guidance />
      <Divider />

      <Threepic />
      <Text marginBottom="-40px" bg="#EEEEEE" py={3}>
        <b>Website feedback? Let us know ▸</b>
      </Text>
      <Footer />
    </>
  );
  //fontFamily: 'Verdana'
};
