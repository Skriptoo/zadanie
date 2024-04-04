import { Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { tagsService } from "../services/api/tagsService";
import { TagList } from "../interfaces/tags";

const TableComponent = (props: {
  pageSize: number, 
  pageNumber: number, 
  sort: string, 
  order: string,
  setHasMore: (value: boolean) => void
}) => {
  const [tagList, setTagList] = useState<TagList>();
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  useEffect(() => {
      tagsService.getTags(props.pageSize, props.pageNumber, props.sort, props.order).then(
        (response) => {
          setTagList(response.data);
          props.setHasMore(response.data.has_more);
        }
      ).catch((error) => {
        setErrorMsg(error.message);
        setError(true);
      })
  }, [props.pageNumber, props.pageSize, props.sort, props.order]);
  return(error ? <Text> {errorMsg} </Text> :
    <TableContainer>
      <Table variant="simple" colorScheme="teal">
        <Tbody>
          {tagList?.items.map((tag) => (
            <Tr>
              <Td key={tag.name}>{tag.name} {tag.count}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default TableComponent;