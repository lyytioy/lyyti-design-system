import { ContainerProps } from '@mui/material';
import { StoryFn, Meta } from '@storybook/react';
import { Container } from '../../src';
import exampleText from '../../public/assets/example_text.json';

export default {
  title: 'Components/Layout/Container',
  component: Container,
  parameters: {
    docs: {
      description: {
        component: 'Containers are a great and responsive way to center your content horizontally.',
      },
    },
  },
  argTypes: {
    component: {
      table: { defaultValue: { summary: 'div' } },
    },
    disableGutters: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
      description: 'If true, the left and right padding is removed',
    },
    fixed: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
      description: `Set the max-width to match the min-width of the current breakpoint. This is useful if you'd prefer to design \
          for a fixed set of sizes instead of trying to accommodate a fully fluid viewport. It's fluid by default.`,
    },
    maxWidth: {
      control: { type: 'string' },
      table: { defaultValue: { summary: false } },
      description: `Determine the max-width of the container. The container width grows with the size of the screen. \
          Set to false to disable maxWidth.`,
    },
    sx: {
      table: { defaultValue: { summary: '{}' } },
    },
  },
} as Meta;

const Template: StoryFn<ContainerProps> = ({ ...args }) => (
  <Container {...args}>{exampleText.lorem_ipsum}</Container>
);

export const Default = Template.bind({});
Default.args = {};
