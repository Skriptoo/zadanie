import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortingBox = (props: {setSort: (value: string) => void, setOrder: (value: string) => void,
  order: string}) => {
  const sortTable = (value: string) => {
    props.setSort(value);
  }
  const changeOrder = (value: string) => {
    props.setOrder(value);
  }
  return (
    <Box display="flex" gap={1}>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton as={Button} variant="outline" isActive={isOpen} rightIcon={<ChevronDownIcon/>}>
              {props.order}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changeOrder("asc")}>ASC</MenuItem>
              <MenuItem onClick={() => changeOrder("desc")}>DESC</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <Button onClick={() => sortTable("popular")} variant="outline">Popular</Button>
      <Button onClick={() => sortTable("activity")} variant="outline">Activity</Button>
      <Button onClick={() => sortTable("name")} variant="outline">Name</Button>
    </Box>
  )
}

export default SortingBox;