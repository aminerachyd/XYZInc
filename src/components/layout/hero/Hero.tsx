import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import peopleImage from "./people.jpg";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <Box d="flex" backgroundColor="blue.100" justifyContent="center">
      <Box position="relative" backgroundColor="blue.300">
        <Image opacity="0.5" maxH="600px" src={peopleImage} />
        <Box h="100%" w="100%" position="absolute" top="0%" left="0%">
          <Flex h="100%">
            <VStack
              alignSelf="start"
              mt={10}
              ml={10}
              bgColor="blue.300"
              borderRadius={10}
              p={5}
              alignItems="start"
            >
              <Heading color="white">XYZ Inc.</Heading>
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Heading color="white">Where me make things</Heading>
            </VStack>
            <VStack
              w="60%"
              alignSelf="flex-end"
              mb={10}
              ml={10}
              mr={10}
              bgColor="white"
              borderRadius={10}
              p={5}
              alignItems="start"
            >
              <Heading alignSelf="flex-end" color="blue.500">
                We want you !
              </Heading>
              <Text pl={2} fontSize="xl">
                Your name :
              </Text>
              <Input placeholder="Your name" />
              <Text pl={2} fontSize="xl">
                Your email :
              </Text>
              <Input placeholder="Your email" />
              <Spacer />
              <Button d="block" colorScheme="blue" w="100%">
                Join us
              </Button>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
export default Hero;
