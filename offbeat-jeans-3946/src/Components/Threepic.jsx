import { Divider, GridItem, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Box2 } from "../ReuseComp/Box2";

export const Threepic = () => {
  return (
    <r>
      <SimpleGrid mx={40} columns={3} columnGap={8} my={10}>
        <GridItem>
          <Box2
            title="Our Commitment to Diversity, Equity & Inclusion"
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=400"
          />
        </GridItem>
        <GridItem>
          <Box2
          bg="#16603B"
          color="White"
            title="Get Your Gifts in Time"
            t2="Fast and easy options for stress-free holiday shopping."
            src="https://www.sephora.com/contentimages/2022-holiday-launch-site-desktop-mobile-home-page-rwd-marketing-banner-bottom-banner-ease-and-convenience-800x256-us-can.jpg?imwidth=400"
          />
        </GridItem>
        <GridItem>
          <Box2
            title="Clean + Planet Positive"
            t2="Brands on a mission to change your skin and the earth."
            src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-clean-planet-positive-desktop-mobile-us-ca-slice.jpeg?imwidth=400"
            bg="#C6A886"
          />
        </GridItem>
      </SimpleGrid>
      <Divider />
    </r>
  );
};
