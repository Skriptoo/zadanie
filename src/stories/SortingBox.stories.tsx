import SortingBox from "../components/SortingBox";
import { Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof SortingBox> = {
  component: SortingBox,
};
  
export default meta;
  
type Story = StoryObj<typeof SortingBox>;
  
export const Default: Story = {
	render: () => <SortingBox setSort={() => {}} setOrder={() => {}} order="desc" />,
};