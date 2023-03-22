import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="5px">
        <Image src={logo} boxSize="50px" objectFit="cover" />
        <Text color="green">NavBar</Text>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
