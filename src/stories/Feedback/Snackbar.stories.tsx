import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Snackbar, { SnackbarProps } from '../../components/Snackbar';
import ThemeSelector from '../../themes/ThemeSelector';

export default {
  title: 'Components/Feedback/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) => (
  <ThemeSelector>
    <Snackbar {...args} />
  </ThemeSelector>
);

export const Success = Template.bind({});
Success.args = {
  open: true,
};

export const Error = Template.bind({});
Error.args = {
  open: true,
  message: 'Error occured',
  severity: 'error',
  variant: 'filled',
  direction: 'right',
};

export const Info = Template.bind({});
Info.args = {
  open: true,
  message: 'Info message here',
  severity: 'info',
  variant: 'outlined',
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left',
  },
  direction: 'up',
};
