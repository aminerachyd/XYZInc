import { Container, Text, Heading, Divider, Flex } from "@chakra-ui/react";
import React from "react";

interface OurMissionProps {}

const OurMission: React.FC<OurMissionProps> = ({}) => {
  return (
    <Container maxWidth="4xl" align="center">
      <Heading mt={6} color="blue.500">
        Our Mission
      </Heading>
      <Divider borderColor="#333" w="100%" my={2} border="2px" />
      <Flex alignItems="start" minW="100%" justifyContent="space-between">
        <Flex mx={2} direction="column" align="center">
          <Heading mt={6} fontSize="2xl" color="blue.500">
            Doing something
          </Heading>
          <Divider borderColor="#333" w="50%" my={2} border="2px" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
            dicta perferendis excepturi, veniam temporibus ex suscipit odio ut
            optio aliquam rerum iure illum. Ullam atque alias rem sint placeat
            odit, soluta voluptatibus earum. Esse hic quae dicta nihil, quod
            perspiciatis tempora, id consequuntur labore aperiam harum excepturi
            accusantium nisi deleniti quo deserunt soluta perferendis cupiditate
            repellat tenetur eos ullam?
          </Text>
        </Flex>{" "}
        <Flex mx={2} direction="column" align="center">
          <Heading mt={6} fontSize="2xl" color="blue.500">
            Really doing stuff
          </Heading>
          <Divider borderColor="#333" w="50%" my={2} border="2px" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
            dicta perferendis excepturi, veniam temporibus ex suscipit odio ut
            optio aliquam rerum iure illum. Ullam atque alias rem sint placeat
            odit, soluta voluptatibus earum. Esse hic quae dicta nihil, quod
            perspiciatis tempora, id consequuntur labore aperiam harum excepturi
            accusantium nisi deleniti quo deserunt soluta perferendis cupiditate
            repellat tenetur eos ullam?
          </Text>
        </Flex>{" "}
        <Flex mx={2} direction="column" align="center">
          <Heading mt={6} fontSize="2xl" color="blue.500">
            Again : Doing
          </Heading>
          <Divider borderColor="#333" w="50%" my={2} border="2px" />
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nulla
            dicta perferendis excepturi, veniam temporibus ex suscipit odio ut
            optio aliquam rerum iure illum. Ullam atque alias rem sint placeat
            odit, soluta voluptatibus earum. Esse hic quae dicta nihil, quod
            perspiciatis tempora, id consequuntur labore aperiam harum excepturi
            accusantium nisi deleniti quo deserunt soluta perferendis cupiditate
            repellat tenetur eos ullam?
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default OurMission;
