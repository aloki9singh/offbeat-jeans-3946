import { Box, Container, Divider, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Box1 } from "../ReuseComp/Box1";

const Featured = () => {
  var arr = [
    {
      title: "Gift & Value Quiz",
      image:
        "https://www.sephora.com/contentimages/homepage/092022/Homepage/RWD/gifts%2032@3x.png?imwidth=53",
    },
    {
      title: "Luxe Skin",
      image:
        "https://www.sephora.com/contentimages/categorybanners/RWD/icons/luxury_beauty.svg",
    },
    {
      title: "Makeup Under $25",
      image:
        "https://www.sephora.com/contentimages/homepage/100422/Homepage/RWD/under25%2032@3x.jpg?imwidth=53",
    },
    {
      title: "Moisturizers",
      image:
        "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=53",
    },
    {
      title: "Hair Styling & Treatments",
      image:
        "https://www.sephora.com/contentimages/homepage/091322/Homepage/RWD/hair%20dryer.JPG?imwidth=53",
    },
    {
      title: "Purfume",
      image:
        "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg?imwidth=53",
    },
    {
      title: "Sephora Collection",
      image:
        "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_sephoracollection_SC_us_ca_rwd_slice.jpg?imwidth=53",
    },
    {
      title: "Jumbos",
      image:
        "https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_samples_32_us_ca_rwd_slice.png?imwidth=53",
    },
  ];
  return (
    <>
      <Divider />
      <Box m={10}>
        <HStack gap={20} mx={20}>
          <Text marginTop="-70px" fontSize={21}>
            <b>Featured Categories</b>
            <Text fontSize={14}>Shop what's popular now.</Text>
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

export default Featured;
