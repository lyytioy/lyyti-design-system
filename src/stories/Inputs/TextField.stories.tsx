import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '../../components/TextField';
import ThemeSelector from '../../themes/ThemeSelector';
import InputAdornment from '../../components/InputAdornment';

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  argTypes: {
    margin: {
      control: {
        type: 'radio',
        options: ['dense', 'normal'],
      },
    },
    InputProps: {
      table: {
        disable: true,
      },
    },
    InputLabelProps: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <ThemeSelector>
    <TextField {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = {
  margin: 'normal',
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Helper text',
};

export const Error = Template.bind({});
Error.args = {
  helperText: 'Helper text',
  error: true,
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  helperText: 'Helper text',
  InputProps: {
    notched: false,
    startAdornment: <InputAdornment position="start">{'Kg'}</InputAdornment>,
  },
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  helperText: 'Helper text',
  InputProps: {
    notched: false,
    endAdornment: <InputAdornment position="end">{'Kg'}</InputAdornment>,
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  InputProps: {
    notched: false,
    endAdornment: <InputAdornment position="end">{'Kg'}</InputAdornment>,
  },
};
