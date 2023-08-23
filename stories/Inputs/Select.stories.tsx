import { StoryFn, Meta } from '@storybook/react';
import Select, { SelectProps } from '../../src/components/Select';
import { ChangeEvent, useState } from 'react';
import { AutocompleteProps } from '../../src/components/Autocomplete';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

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
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  args: {
    label: 'Label',
    multiple: false,
  },
} as Meta;

const SelectTemplate: StoryFn<SelectProps> = (args: SelectProps) => {
  const isMultiple = Boolean('SelectProps' in args && args.SelectProps?.multiple);
  const [selectValue, setSelectValue] = useState<Array<string | number> | string | number>(isMultiple ? [0] : 0);

  args.value = selectValue;
  args.onChange = (e: ChangeEvent<HTMLInputElement>) => setSelectValue(e.target.value);

  if (!args.options) {
    args.options = [
      { id: 0, value: 'Select...' },
      { id: 1, value: 'Option 1' },
      { id: 2, value: 'Option 2' },
      { id: 3, value: 'Option 3' },
      { id: 4, value: 'Option 4' },
    ];
  }

  return <Select {...args} />;
};

const MultiSelectTemplate: StoryFn<AutocompleteProps> = (args) => {
  if (!args.options) {
    args.options = [
      { id: 0, value: 'Select...' },
      { id: 1, value: 'Option 1' },
      { id: 2, value: 'Option 2' },
      { id: 3, value: 'Option 3' },
      { id: 4, value: 'Option 4' },
    ];
  }

  return <Select {...args} />;
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

export const OptionDivider = SelectTemplate.bind({});
OptionDivider.args = {
  helperText: 'Helper text',
  optionDivider: true
};

export const OptionDescription = SelectTemplate.bind({});
OptionDescription.args = {
  helperText: 'Helper text',
  options: [
    { id: 0, value: 'Select...' },
    { id: 1, value: 'Option 1', description: 'lorem ipsum dolor' },
    { id: 2, value: 'Option 2', description: 'lorem ipsum dolor' },
    { id: 3, value: 'Option 3', description: 'lorem ipsum dolor' },
    { id: 4, value: 'Option 4', description: 'lorem ipsum dolor' },
  ],
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

export const MultipleSelectCheckbox = SelectTemplate.bind({});
MultipleSelectCheckbox.args = {
  placeholder: 'Select',
  fullWidth: true,
  SelectProps: {
    multiple: true,
  },
  checkbox: true,
};

export const MultipleSelectOptionDivider = MultiSelectTemplate.bind({});
MultipleSelectOptionDivider.args = {
  multiple: true,
  placeholder: 'Select',
  fullWidth: true,
  optionDivider: true
};


export const MultipleSelectOptionDescription = MultiSelectTemplate.bind({});
MultipleSelectOptionDescription.args = {
  multiple: true,
  placeholder: 'Select',
  fullWidth: true,
  options: [
    { id: 0, value: 'Select...' },
    { id: 1, value: 'Option 1', description: 'lorem ipsum dolor' },
    { id: 2, value: 'Option 2', description: 'lorem ipsum dolor' },
    { id: 3, value: 'Option 3', description: 'lorem ipsum dolor' },
    { id: 4, value: 'Option 4', description: 'lorem ipsum dolor' },
  ],
};

export const MultipleSelectLargeWhite = MultiSelectTemplate.bind({});
MultipleSelectLargeWhite.args = {
  multiple: true,
  placeholder: 'Select',
  fullWidth: true,
  size: 'medium',
  color: 'white',
};
MultipleSelectLargeWhite.parameters = {
  backgrounds: { default: 'dark' },
};
