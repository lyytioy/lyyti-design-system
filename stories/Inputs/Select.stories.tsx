import { Story, Meta } from '@storybook/react/types-6-0';
import Select, { SelectProps } from '../../src/components/Select';
import { ChangeEvent, useState } from 'react';
import { AutocompleteProps } from '../../src/components/Autocomplete';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'Select components are used for collecting user provided information from a list of options.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
  },
  args: {
    label: 'Label',
    multiple: false,
  },
} as Meta;

const SelectTemplate: Story<SelectProps> = (args) => {
  const [selectValue, setSelectValue] = useState('0');

  args.value = selectValue;
  args.onChange = (e: ChangeEvent<HTMLInputElement>) => setSelectValue(e.target.value);

  return (
    <Select
      {...args}
      options={[
        { id: 0, value: 'Select...' },
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
        { id: 3, value: 'Option 3' },
        { id: 4, value: 'Option 4' },
      ]}
    />
  );
};

const MultiSelectTemplate: Story<AutocompleteProps> = (args) => {
  return (
    <Select
      {...args}
      options={[
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
        { id: 3, value: 'Option 3' },
        { id: 4, value: 'Option 4' },
      ]}
    />
  );
};

export const Default = SelectTemplate.bind({});
Default.args = {};

export const Large = SelectTemplate.bind({});
Large.args = {
  margin: 'normal',
};

export const HelperText = SelectTemplate.bind({});
HelperText.args = {
  helperText: 'Helper text',
};

export const Error = SelectTemplate.bind({});
Error.args = {
  helperText: 'Helper text',
  error: true,
};

export const StartAdornment = SelectTemplate.bind({});
StartAdornment.args = {
  helperText: 'Helper text',
  adornment: 'Kg',
};

export const Disabled = SelectTemplate.bind({});
Disabled.args = {
  helperText: 'Helper text',
  disabled: true,
};

export const White = SelectTemplate.bind({});
White.args = {
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const MultipleSelect = MultiSelectTemplate.bind({});
MultipleSelect.args = {
  multiple: true,
  placeholder: 'Select',
  fullWidth: true,
};

export const MultipleSelectLargeWhite = MultiSelectTemplate.bind({});
MultipleSelectLargeWhite.args = {
  multiple: true,
  placeholder: 'Select',
  fullWidth: true,
  margin: 'normal',
  color: 'white',
};
MultipleSelectLargeWhite.parameters = {
  backgrounds: { default: 'dark' },
};
