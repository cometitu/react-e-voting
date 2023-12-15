import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "../../assets/Logo.png";
import LogoHelios from "../../assets/tinylogo.png"
import "./Navbar.css";


export default function Navbar() {
  return (
    <Box className="navbar-container">
      <Flex height={"75%"}>
        <img src={LogoHelios} alt="logo" />
        <Text marginTop="20px" >Secure E2E Voting</Text>
      </Flex>
    </Box>
  );
}
