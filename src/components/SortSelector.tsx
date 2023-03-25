import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  handleSelectedSort: (sortItem: string) => void;
  currentSortOrder: string;
}

const SortSelector = ({ handleSelectedSort, currentSortOrder }: Props) => {
  const SortItems = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date Added" },
    { value: "-released", label: "Released" },
    { value: "-rating", label: "Rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

  let currentSortOrderLabel = SortItems.filter(
    (item) => item.value === currentSortOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrderLabel[0]?.label || "Relevance"}
        </MenuButton>
        <MenuList fontSize="15px">
          {SortItems.map((item) => (
            <MenuItem
              onClick={() => handleSelectedSort(item.value)}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
