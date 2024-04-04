import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { 
  Box, 
  Button, 
  Menu, 
  MenuButton, 
  MenuItem, 
  MenuList
} from "@chakra-ui/react";

const PagesSwitcher = (props: {
  pageNumber: number, 
  setPageNumber: (value: number) => void,
  setPageSize: (value: number) => void, 
  pageSize: number,
}) => {
  const changePage = (value: number) => {
    if(props.pageNumber + value < 1) return;
    props.setPageNumber(props.pageNumber + value);
  }
  const changePageSize = (value: number) => {
    props.setPageSize(value);
  }
  
  return (
    <Box display="flex" gap={3}>
      <Button variant="outline" onClick={() => changePage(-1)}><ArrowLeftIcon/></Button>
      <Box width="2em" justifyContent="center" alignItems="center" display="flex"> {props.pageNumber}</Box>
      <Button variant="outline" onClick={() => changePage(1)}><ArrowRightIcon/></Button>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton as={Button} variant="outline" isActive={isOpen} rightIcon={<ChevronDownIcon/>}>
              {props.pageSize}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => changePageSize(10)}>10</MenuItem>
              <MenuItem onClick={() => changePageSize(25)}>25</MenuItem>
              <MenuItem onClick={() => changePageSize(50)}>50</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Box>
  )
}
export default PagesSwitcher;