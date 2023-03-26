import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearchNav: (searchText: string) => void;
}

const SearchBar = ({ onSearchNav }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearchNav(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            backgroundColor={"gray.700"}
            borderRadius={20}
            placeholder="Search for a game"
            variant="filled"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchBar;
