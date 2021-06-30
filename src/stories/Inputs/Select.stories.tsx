import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import Select, { SelectProps } from '../../components/Select';
import { ChangeEvent, useState } from 'react';
import { MultiselectProps } from '../../components/Multiselect';

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
  },
  args: {
    label: 'Label',
  },
} as Meta;

const SelectTemplate: Story<SelectProps> = (args) => {
  const [selectValue, setSelectValue] = useState('0');

  args.value = selectValue;
  args.onChange = (e: ChangeEvent<HTMLInputElement>) => setSelectValue(e.target.value);

  return (
    <ThemeSelector>
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
    </ThemeSelector>
  );
};

const MultiSelectTemplate: Story<MultiselectProps> = (args) => {
  return (
    <ThemeSelector>
      <Select
        {...args}
        options={[
          { id: 1, value: 'Option 1' },
          { id: 2, value: 'Option 2' },
          { id: 3, value: 'Option 3' },
          { id: 4, value: 'Option 4' },
        ]}
      />
    </ThemeSelector>
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
  startAdornment: 'Kg',
};

export const Disabled = SelectTemplate.bind({});
Disabled.args = {
  helperText: 'Helper text',
  disabled: true,
};

export const MultipleSelect = MultiSelectTemplate.bind({});
MultipleSelect.args = {
  multiple: true,
};
