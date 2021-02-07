import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <Flex bg="blue.600" p={5} align="center" justify="space-between">
      <Box>
        <Heading fontSize="2xl" color="white">
          XYZ Inc.
        </Heading>
      </Box>
      <Box>
        <List d="flex">
          <ListItem mx={3}>
            <Link color="white">
              <Text>Home</Text>
            </Link>
          </ListItem>
          <ListItem mx={3}>
            <Link color="white">
              <Text>Our Mission</Text>
            </Link>
          </ListItem>
          <ListItem mx={3}>
            <Link color="white">
              <Text>Testimonials</Text>
            </Link>
          </ListItem>
          <ListItem mx={3}>
            <Link color="white">
              <Text>Contact Us</Text>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default Navbar;
