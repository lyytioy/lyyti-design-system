import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Checkbox, { CheckboxProps } from '../components/Checkbox';
import FormControlLabel, { FormControlLabelProps } from '../components/FormControlLabel';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
        control: {
            type: 'radio',
            options: [
                'small',
                'medium'
          ]
        }
    }
  }
} as Meta;

const Template: Story<CheckboxProps> = (args) => <ThemeSelector><Checkbox {...args} /></ThemeSelector>;

const LabelTemplate: Story<FormControlLabelProps> = (args) => <ThemeSelector><FormControlLabel {...args} /></ThemeSelector>;

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

export const Label = LabelTemplate.bind({});
Label.args = {
  control: <Checkbox />,
  label: 'Label'
}