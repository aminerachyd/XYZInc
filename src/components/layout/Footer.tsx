import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Flex bg="blue.600" p={5} align="center" justify="center" flexDir="column">
      <Heading fontSize="2xl" color="white">
        Copyright XYZ Inc.
      </Heading>
      <Heading mt={2} fontSize="2xl" color="white">
        Yep we really want to do stuff
      </Heading>
    </Flex>
  );
};

export default Footer;
