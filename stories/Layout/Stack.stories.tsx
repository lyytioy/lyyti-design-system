import { Story, Meta } from '@storybook/react/types-6-0';
import { Stack, StackProps } from '../../src';
import { Rect } from '../Feedback/Skeleton.stories';

export default {
  title: 'Components/Layout/Stack',
  component: Stack,
  parameters: {
    docs: {
      description: {
        component: 'Stacks are a great way to make responsive one dimensional layouts, for two dimensional layouts prefer Grid'
      },
    },
  },
  argTypes: {
    component: {
      table: { defaultValue: { summary: 'div' } },
      description: 'The component used for the root node. Either a string to use a HTML element or a component.',
    },
    direction: { 
        control: { type: 'string' },
        table: { defaultValue: { summary: 'column' } },
        description: 'Defines the flex-direction style property. It is applied for all screen sizes.',
    },

    spacing: {
        control: { type: 'number' },
        table: { defaultValue: { summary: 0 } },
        description: 'Defines the space between immediate children.',
    },
    divider: {
        table: { defaultValue: { summary: undefined } },
        description: 'Add an element between each child.',
    },
  },
} as Meta;

const Template: Story<StackProps> = ({ ...args }) => (
  <Stack {...args}>
    <Rect {...Rect.args} />
    <Rect {...Rect.args} />
    <Rect {...Rect.args} />
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
    spacing: 1,
};

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
    spacing: 1,
}
