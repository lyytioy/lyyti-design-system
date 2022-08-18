import { Story, Meta } from '@storybook/react/types-6-0';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
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
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      description: 'The variant to use. Use indeterminate when there is no progress value.',
      options: ['determinate', 'indeterminate'],
      table: {
        type: { summary: "'determinate' | 'indeterminate'" },
        defaultValue: { summary: "'indeterminate'" },
      },
      defaultValue: 'indeterminate',
    },
    value: {
      description:
        'The value of the progress indicator for the determinate variant. Value between 0 and 100.',
      control: { type: 'range' },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0 },
      },
      defaultValue: 0,
    },
    size: {
      description:
        'Size, which defines width and height for circular variant and only height for linear variant (linear is always as wide as its container). If using a number, the pixel unit is assumed. If using a string, you need to provide the CSS unit, e.g "3rem".',
      control: { type: 'text' },
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: '40px circular / 4px linear' },
      },
      defaultValue: undefined,
    },
    type: {
      control: { type: 'radio' },
      description: 'Defines whether to show circular or linear progress indicator.',
      options: ['circular', 'linear'],
      table: {
        type: { summary: "'circular' | 'linear'" },
        defaultValue: { summary: "'circular'" },
      },
      defaultValue: 'circular',
    },
    color: {
      control: { type: 'radio' },
      description: 'Defines the color of progress indicator.',
      options: ['primary', 'secondary'],
      table: {
        type: { summary: "'primary' | 'secondary'" },
        defaultValue: { summary: "'primary'" },
      },
      defaultValue: 'primary',
    },
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
