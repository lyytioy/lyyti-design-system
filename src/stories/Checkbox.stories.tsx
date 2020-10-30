import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from './Checkbox';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <ThemeSelector><Checkbox {...args} /></ThemeSelector>;

export const Medium = Template.bind({});
Medium.args = {
  checked: true,
  disabled: false,
  size: 'medium'
};

export const Small = Template.bind({});
Small.args = {
  checked: true,
  disabled: false,
  size: 'small'
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  checked: true,
  disabled: false,
  indeterminate: true
};