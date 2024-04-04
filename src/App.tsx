import { Box } from '@chakra-ui/react'
import TableComponent from './components/Table'
import { useState } from 'react';
import PagesSwitcher from './components/PagesSwitcher';
import SortingBox from './components/SortingBox';

const App = () => {
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [sort, setSort] = useState<string>("popular");
  const [order, setOrder] = useState<string>("desc");
  return (
      <Box width="50%">
        <Box display="flex" justifyContent="space-between">
          <PagesSwitcher 
            setPageNumber={setPageNumber} 
            pageNumber={pageNumber} 
            setPageSize={setPageSize} 
            pageSize={pageSize}
          />
          <SortingBox 
            setSort={setSort}
            setOrder={setOrder}
            order={order}
            />
        </Box>
        <TableComponent 
          pageSize={pageSize} 
          pageNumber={pageNumber} 
          sort={sort}
          order={order}
        />
      </Box>
  )
}
export default App;
