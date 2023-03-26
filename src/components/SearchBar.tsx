import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          backgroundColor={"gray.700"}
          borderRadius={20}
          placeholder="Search for a game"
          variant="filled"
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
