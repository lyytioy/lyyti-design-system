import { Story, Meta } from '@storybook/react/types-6-0';
import Progress, { ProgressProps } from 'components/Progress';
import ThemeSelector from 'themes/ThemeSelector';

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
    color: { description: 'Defines the color of the progress indicator.' },
    size: { description: 'Size can be adjusted only for the circular progress.' },
    type: { description: 'Defines whether to show circular or linear progress indicator.' },
    value: {
      description:
        'The value of the progress indicator for the determinate variant. Value between 0 and 100.',
    },
    variant: {
      description: 'The variant to use. Use indeterminate when there is no progress value.',
    },
  },
} as Meta;

const Template: Story<ProgressProps> = (args) => (
  <ThemeSelector>
    <Progress {...args} />
  </ThemeSelector>
);

export const CircularProgress = Template.bind({});
CircularProgress.args = {};

export const LinearProgress = Template.bind({});
LinearProgress.args = {
  type: 'linear',
  color: 'secondary',
};
