import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '../components/TextField';
import ThemeSelector from "../themes/ThemeSelector";
import InputAdornment from '../components/InputAdornment';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    margin: {
        control: {
            type: 'radio',
            options: [
                'dense',
                'normal'
            ]
        }
    },
    InputProps: {
      table: {
        disable: true
      }
    },
    InputLabelProps: {
      table: {
        disable: true
      }
    },
}
} as Meta;

const Template: Story<TextFieldProps> = (args) => <ThemeSelector><TextField {...args} /></ThemeSelector>;

export const Default = Template.bind({});
Default.args = {
  margin: 'dense',
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const Large = Template.bind({});
Large.args = {
  margin: 'normal',
  label: "Label",
  placeholder: "Placeholder",
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const HelperText = Template.bind({});
HelperText.args = {
  margin: 'dense',
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Helper text",
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const Error = Template.bind({});
Error.args = {
  margin: 'dense',
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Helper text",
  disabled: false,
  error: true,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  margin: 'dense',
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Helper text",
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false, startAdornment: <InputAdornment position="start">Kg</InputAdornment> },
};

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  margin: 'dense',
  label: "Label",
  placeholder: "Placeholder",
  helperText: "Helper text",
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false, endAdornment: <InputAdornment position="end">Kg</InputAdornment> },
};

export const Disabled = Template.bind({});
Disabled.args = {
  margin: 'dense',
  label: "Label",
  placeholder: "Placeholder",
  disabled: true,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false, endAdornment: <InputAdornment position="end">Kg</InputAdornment> },
};