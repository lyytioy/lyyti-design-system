import { StoryFn, Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from '../../src/components/Checkbox';
import FormControlLabel, { FormControlLabelProps } from '../../src/components/FormControlLabel';

export default {
  title: 'Components/Inputs/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      options: ['small', 'medium'],
    },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

const LabelTemplate: StoryFn<FormControlLabelProps> = (args) => <FormControlLabel {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  checked: true,
  disabled: false,
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  checked: true,
  disabled: false,
  size: 'small',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  checked: true,
  disabled: false,
  indeterminate: true,
};

export const Label = LabelTemplate.bind({});
Label.args = {
  control: <Checkbox />,
  label: 'Label',
};
