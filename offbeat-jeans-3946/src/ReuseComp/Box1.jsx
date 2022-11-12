import React from "react";
import { Text, Box, Container, Image, Spacer } from "@chakra-ui/react";
export const Box1 = ({ title, image }) => {
  return (
    <>
      <Container
        key={title}
        p={2}
        w="110px"
        h="130px"
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Text align="start" paddingBottom={6} fontSize={14}>
          {title}
        </Text>
        {/* <Box > */}
        <Image ml="40px" w="53px" h="53px" src={image} />
      </Container>
    </>
  );
};
