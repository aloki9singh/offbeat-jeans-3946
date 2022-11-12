import { Container, Divider, Heading, Image } from "@chakra-ui/react";
import React from "react";

export const Box2 = ({ title, src, t2, bg,color }) => {
  return (
    <>
      <Container
        bg={bg}
        p={2}
        color={color}
        h="234px"
        w="398px"
        boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
      >
        <Heading fontSize={22}>{title}</Heading>
        <>{t2}</>
        <Image marginTop={7} src={src} />
        {/* <Text>
          <b>LEARN MORE▸</b>
        </Text> */}
      </Container>
    </>
  );
};
