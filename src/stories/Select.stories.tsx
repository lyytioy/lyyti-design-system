import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../themes/ThemeSelector';
import InputAdornment from '../components/InputAdornment';
import { MenuItem } from '@material-ui/core';
import TextField, { TextFieldProps } from '../components/TextField';

export default {
  title: 'Components/Select',
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <ThemeSelector>
    <TextField {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {
  select: true,
  children: <MenuItem>{'Item 1'}</MenuItem>,
  variant: 'outlined',
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const Large = Template.bind({});
Large.args = {
  select: true,
  children: <MenuItem>{'Item 1'}</MenuItem>,
  variant: 'outlined',
  margin: 'normal',
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const HelperText = Template.bind({});
HelperText.args = {
  select: true,
  children: <MenuItem>{'Item 1'}</MenuItem>,
  variant: 'outlined',
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper text',
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const Error = Template.bind({});
Error.args = {
  select: true,
  children: <MenuItem>{'Item 1'}</MenuItem>,
  variant: 'outlined',
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper text',
  disabled: false,
  error: true,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  select: true,
  children: <MenuItem>{'Item 1'}</MenuItem>,
  variant: 'outlined',
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper text',
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: {
    notched: false,
    startAdornment: <InputAdornment position="start">{'Kg'}</InputAdornment>,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  select: true,
  children: <MenuItem>{'Item 1'}</MenuItem>,
  variant: 'outlined',
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper text',
  disabled: true,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};
