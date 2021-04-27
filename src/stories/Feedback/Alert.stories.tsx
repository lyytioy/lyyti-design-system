import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
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
    action: {
      control: false,
    },
    children: { description: 'The content of the component.', control: 'text' },
    color: { control: { type: 'select' }, options: ['success', 'error', 'warning', 'info'] },
    closeText: {
      description: 'Override the default label for the close popup icon button.',
      defaultValue: 'Close',
      control: 'text',
    },
    onClose: {
      control: false,
    },
  },
  args: {
    children: 'This is the alert content',
  },
} as Meta;

const Template: Story<AlertProps> = (args) => {
  const [alertOpen, setAlertOpen] = useState(true);

  args.open = alertOpen;
  args.onClose = () => setAlertOpen(false);

  return (
    <ThemeSelector>
      <Alert {...args} />
      <Button variant="contained" color="primary" chunky={false} onClick={() => setAlertOpen(true)}>
        {'Re-open'}
      </Button>
    </ThemeSelector>
  );
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
  severity: 'info',
  variant: 'filled',
};

export const Warning = Template.bind({});
Warning.args = {
  children: [<AlertTitle key={1}>{'Title'}</AlertTitle>, 'Alert content in here'],
  severity: 'warning',
};
