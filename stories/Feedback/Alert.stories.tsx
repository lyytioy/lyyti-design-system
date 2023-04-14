import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import Alert, { AlertProps } from '../../src/components/Alert';
import Button from '../../src/components/Button';

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
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    action: {
      control: false,
    },
    children: { description: 'The content of the component.', control: 'text' },
    options: ['success', 'error', 'warning', 'info'],
    closeText: {
      description: 'Override the default label for the close popup icon button.',
      control: 'text',
    },
    onClose: {
      control: false,
    },
    title: {
      description: 'The title of the alert.',
    },
  },
  args: {
    children: 'This is the alert content',
    closeText: 'Close',
  },
} as Meta;

const Template: StoryFn<AlertProps> = (args) => {
  const [alertOpen, setAlertOpen] = useState(true);

  args.open = alertOpen;
  args.onClose = () => setAlertOpen(false);

  return (
    <>
      {alertOpen ? (
        <Alert {...args} />
      ) : (
        <Button variant="contained" color="primary" onClick={() => setAlertOpen(true)}>
          {'Re-open'}
        </Button>
      )}
    </>
  );
};

export const Success = Template.bind({});
Success.args = {};

export const Error = Template.bind({});
Error.args = {
  action: <Button color="inherit">{'Undo'}</Button>,
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
  title: 'Title',
  children: 'Alert content in here',
  severity: 'warning',
};
