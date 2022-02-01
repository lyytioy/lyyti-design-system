import { Story, Meta } from '@storybook/react/types-6-0';
import Progress, { ProgressProps } from '../../src/components/Progress';

export default {
  title: 'Components/Feedback/Progress',
  component: Progress,
  parameters: {
    docs: {
      description: {
        component:
          'Use progress indicators to inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.',
      },
    },
  },
  argTypes: {
    size: { description: 'Size can be adjusted only for the circular progress.' },
    type: { description: 'Defines whether to show circular or linear progress indicator.' },
  },
} as Meta;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const CircularProgress = Template.bind({});
CircularProgress.args = {};

export const LinearProgress = Template.bind({});
LinearProgress.args = {
  type: 'linear',
  color: 'secondary',
};
