import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <HStack padding="5px">
        <Image src={logo} boxSize="50px" objectFit="cover" />
        <SearchBar />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
