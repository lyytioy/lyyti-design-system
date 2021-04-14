import { Story, Meta } from '@storybook/react/types-6-0';
import Alert, { AlertProps } from 'components/Alert';
import ThemeSelector from 'themes/ThemeSelector';
import Button from 'components/Button';
import AlertTitle from 'components/AlertTitle';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component:
          "Use alerts to display short, important messages that attracts the user's attention without interrupting the user's tasks.",
      },
    },
  },
  argTypes: {
    action: { control: 'text' },
    children: { description: 'The content of the component.', control: 'text' },
    color: { type: 'select', options: ['success', 'error', 'warning', 'info'] },
    closeText: { control: 'text' },
    onClose: { control: false },
  },
  args: {
    children: 'This is the alert content',
  },
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <ThemeSelector>
    <Alert {...args} />
  </ThemeSelector>
);

const clickFunction = () => {
  console.log('You clicked a button!');
};

export const Success = Template.bind({});
Success.args = {};

export const Error = Template.bind({});
Error.args = {
  action: (
    <Button color="inherit" chunky={false}>
      {'Undo'}
    </Button>
  ),
  severity: 'error',
  variant: 'outlined',
};

export const Info = Template.bind({});
Info.args = {
  onClose: clickFunction,
  severity: 'info',
  variant: 'filled',
};

export const Warning = Template.bind({});
Warning.args = {
  children: [<AlertTitle key={1}>{'Title'}</AlertTitle>, 'Alert content in here'],
  onClose: clickFunction,
  severity: 'warning',
};
