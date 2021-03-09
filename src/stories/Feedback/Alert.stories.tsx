import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Alert, { AlertProps } from '../../components/Alert';
import ThemeSelector from '../../themes/ThemeSelector';
import Button from '../../components/Button';
import AlertTitle from '../../components/AlertTitle';

export default {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    ref: { control: false },
    children: { control: 'text' },
    action: { control: 'text' },
    closeText: { control: 'text' },
    onClose: { control: false },
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
Success.args = {
  onClose: clickFunction,
  variant: 'outlined',
};

export const Error = Template.bind({});
Error.args = {
  severity: 'error',
  action: (
    <Button color="inherit" chunky={false}>
      {'Button'}
    </Button>
  ),
};

export const Info = Template.bind({});
Info.args = {
  severity: 'info',
  variant: 'filled',
};

export const Warning = Template.bind({});
Warning.args = {
  severity: 'warning',
  children: [<AlertTitle key={1}>{'Title'}</AlertTitle>, 'Alert content in here'],
  onClose: clickFunction,
};
