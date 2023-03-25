import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: Relevance
        </MenuButton>
        <MenuList fontSize="15px">
          <MenuItem>Relevance</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Date Added</MenuItem>
          <MenuItem>Release Date</MenuItem>
          <MenuItem>Rating</MenuItem>
          <MenuItem>Popularity</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
