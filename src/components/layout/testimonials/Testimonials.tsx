import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = ({}) => {
  return (
    <Box py={5} mt={5} backgroundColor="blue.500">
      <Container maxWidth="6xl" align="center">
        <Heading color="white">They Trusted Us</Heading>
        <Divider borderColor="blue.100" w="100%" my={2} border="2px" />
        <Flex alignItems="start" minW="100%" justifyContent="space-between">
          <Box mx={3} p={4} borderRadius={10} backgroundColor="blue.100">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              <Box>
                <Text fontSize="xl">John</Text>
                <Text fontSize="xl">Doe</Text>
              </Box>
            </HStack>
            <Divider borderColor="#333" w="100%" my={2} border="2px" />
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
              quasi? Praesentium ipsa ex quibusdam placeat illum rerum impedit
              magnam quaerat dolor, cupiditate saepe vero earum maxime quasi,
              consectetur minus iure.
            </Text>
          </Box>{" "}
          <Box mx={3} p={4} borderRadius={10} backgroundColor="blue.100">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/kent-c-dodds" />
              <Box>
                <Text fontSize="xl">Dohn</Text>
                <Text fontSize="xl">Joe</Text>
              </Box>
            </HStack>
            <Divider borderColor="#333" w="100%" my={2} border="2px" />
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
              quasi? Praesentium ipsa ex quibusdam placeat illum rerum impedit
              magnam quaerat dolor, cupiditate saepe vero earum maxime quasi,
              consectetur minus iure.
            </Text>
          </Box>{" "}
          <Box mx={3} p={4} borderRadius={10} backgroundColor="blue.100">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/ryan-florence" />
              <Box>
                <Text fontSize="xl">John</Text>
                <Text fontSize="xl">Joe</Text>
              </Box>
            </HStack>
            <Divider borderColor="#333" w="100%" my={2} border="2px" />
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
              quasi? Praesentium ipsa ex quibusdam placeat illum rerum impedit
              magnam quaerat dolor, cupiditate saepe vero earum maxime quasi,
              consectetur minus iure.
            </Text>
          </Box>{" "}
          <Box mx={3} p={4} borderRadius={10} backgroundColor="blue.100">
            <HStack>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/prosper-baba" />
              <Box>
                <Text fontSize="xl">Dohn</Text>
                <Text fontSize="xl">Doe</Text>
              </Box>
            </HStack>
            <Divider borderColor="#333" w="100%" my={2} border="2px" />
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
              quasi? Praesentium ipsa ex quibusdam placeat illum rerum impedit
              magnam quaerat dolor, cupiditate saepe vero earum maxime quasi,
              consectetur minus iure.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials;
