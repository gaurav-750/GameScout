import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack padding="7px" marginBottom={3} marginRight={3}>
        <Image src={logo} boxSize="50px" objectFit="cover" />
        <SearchBar onSearchNav={(searchText) => onSearch(searchText)} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default Navbar;
