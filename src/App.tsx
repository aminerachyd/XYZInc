import * as React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
import { theme } from "./extendTheme";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/hero/Hero";
import OurMission from "./components/layout/ourmission/OurMission";
import Testimonials from "./components/layout/testimonials/Testimonials";
import ContactUs from "./components/layout/contactus/ContactUs";
import Footer from "./components/layout/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Hero />
    <OurMission />
    <Testimonials />
    <ContactUs />
    <Footer />
  </ChakraProvider>
);
