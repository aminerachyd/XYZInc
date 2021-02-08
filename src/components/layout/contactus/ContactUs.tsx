import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Input,
  Spacer,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface ContactUsProps {}

const ContactUs: React.FC<ContactUsProps> = ({}) => {
  return (
    <Box py={10} backgroundColor="blue.100">
      <Container maxWidth="3xl" align="center">
        <Heading color="blue.600">Get In Touch</Heading>
        <Divider borderColor="#333" w="100%" my={2} border="2px" />
        <Flex alignItems="start" minW="100%" justifyContent="space-evenly">
          <VStack>
            <Text pl={2} fontSize="xl">
              Your name :
            </Text>
            <Input bgColor="white" placeholder="Your name" />
            <Text pl={2} fontSize="xl">
              Your email :
            </Text>
            <Input bgColor="white" placeholder="Your email" />
            <Text pl={2} fontSize="xl">
              Your location :
            </Text>
            <Input bgColor="white" placeholder="Your location" />
          </VStack>
          <VStack>
            <Text pl={2} fontSize="xl">
              Your message :
            </Text>
            <Textarea h="3xs" bgColor="white" placeholder="Your name" />

            <Spacer />
          </VStack>
          {/* <HStack>
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
            </Text> */}
        </Flex>{" "}
        <Button d="block" colorScheme="blue" w="100%">
          Send
        </Button>
      </Container>
    </Box>
  );
};

export default ContactUs;
