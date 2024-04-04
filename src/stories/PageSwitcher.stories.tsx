import PageSwitcher from '../components/PagesSwitcher';
import { Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof PageSwitcher> = {
  component: PageSwitcher,
};

export default meta;

type Story = StoryObj<typeof PageSwitcher>;

export const Default: Story = {
	render: () => <PageSwitcher pageNumber={1} setPageNumber={() => {}} setPageSize={() => {}} pageSize={10} hasMore={true} />,
};