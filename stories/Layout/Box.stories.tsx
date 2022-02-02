import { Story, Meta } from '@storybook/react/types-6-0';
import Box, { BoxProps } from '../../src/components/Box';
import { Rect } from '../Feedback/Skeleton.stories';

export default {
  title: 'Components/Layout/Box',
  component: Box,
  argTypes: {
    component: {
      table: { defaultValue: { summary: 'div' } },
    },
    sx: {
      table: { defaultValue: { summary: '{}' } },
    },
  },
} as Meta;

const Template: Story<BoxProps> = ({ ...args }) => (
  <Box {...args}>
    <Rect {...Rect.args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {};
