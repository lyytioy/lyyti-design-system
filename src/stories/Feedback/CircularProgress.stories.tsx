import { Story, Meta } from '@storybook/react/types-6-0';
import CircularProgress, { CircularProgressProps } from 'components/CircularProgress';
import ThemeSelector from 'themes/ThemeSelector';

export default {
  title: 'Components/Feedback/CircularProgress',
  component: CircularProgress,
  parameters: {
    docs: {
      description: {
        component:
          'Use progress indicators to inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates.',
      },
    },
  },
} as Meta;

const Template: Story<CircularProgressProps> = (args) => (
  <ThemeSelector>
    <CircularProgress {...args} />
  </ThemeSelector>
);

export const LoadingIndicator = Template.bind({});
LoadingIndicator.args = {};
