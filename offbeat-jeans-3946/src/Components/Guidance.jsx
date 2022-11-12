import { Box, Container, Divider, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Box1 } from "../ReuseComp/Box1";

const Guidance = () => {
    var arr=[{title:"Gifting Quiz",image:"https://www.sephora.com/contentimages/categorybanners/RWD/icons/gift_finder.svg"},   
    {title:"Clean Beauty",image:"https://www.sephora.com/contentimages/categorybanners/RWD/icons/clean_guide.svg"},  
    {title:"Foundation Quiz",image:"https://www.sephora.com/contentimages/categorybanners/RWD/icons/foundation_guide.svg"},  
    {title:"Skincare Routine",image:"https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_age.svg"},  
    {title:"Shiny Hair Guide",image:"https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_healthy%20scalp%20guide_us_ca_rwd_slice.png?imwidth=53"},  
    {title:"Fragrance Hub",image:"https://www.sephora.com/contentimages/categorybanners/RWD/icons/niche_fragrances.svg"}
    ,{title:"Clinical Skincare",image:"https://www.sephora.com/contentimages/categorybanners/RWD/icons/skincare_quiz.svg"},
    {title:"Black-Owned Brands",image:"https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_BOB_us_rwd_slice.png?imwidth=53"}]
  return (
    <>
      <Divider />
      <Box m={10}>
        <HStack gap={6} mx={20}>
          <Text marginTop="-70px" fontSize={21}>
            <b>Need a Little Guidance?</b>
            <Text fontSize={14}>Check out our quizzes and buying guides.</Text>
          </Text>
          <HStack>
            {arr.map((e) => (
              <Box1  title={e.title} image={e.image} />
            ))}
          </HStack>
        </HStack>
      </Box>
      <Divider />
    </>
  );
};

export default Guidance;
