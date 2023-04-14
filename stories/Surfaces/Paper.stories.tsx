import { StoryFn, Meta } from '@storybook/react';
import Paper, { PaperProps } from '../../src/components/Paper';
import { Rect } from '../Feedback/Skeleton.stories';

export default {
  title: 'Components/Surfaces/Paper',
  component: Paper,
  argTypes: {
    elevation: {
      control: { type: 'number' },
      table: { type: { summary: 'number' }, defaultValue: { summary: 1 } },
      description:
        'Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.',
    },
    variant: {
      control: { type: 'select' },
      options: ['elevation', 'outlined'],
      table: { type: { summary: 'elevation | outlined' }, defaultValue: { summary: 'elevation' } },
      description: 'The variant to use.',
    },
  },
} as Meta;

const Template: StoryFn<PaperProps> = ({ ...args }) => (
  <Paper {...args}>
    <Rect {...Rect.args} />
  </Paper>
);

export const Default = Template.bind({});
Default.args = {};
