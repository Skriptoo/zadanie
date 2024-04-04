import TableComponent from "../components/Table";
import { Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof TableComponent> = {
    component: TableComponent,
  };
    
  export default meta;
    
  type Story = StoryObj<typeof TableComponent>;
    
  export const Default: Story = {
      render: () => TableComponent({pageSize: 10, pageNumber: 1, sort: "popular", order: "desc", setHasMore: () => {}}),
  };