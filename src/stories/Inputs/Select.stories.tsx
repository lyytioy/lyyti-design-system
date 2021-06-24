import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import { MenuItem } from '@material-ui/core';
import Select, { SelectProps } from '../../components/Select';
import { useState } from 'react';

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

const Template: Story<SelectProps> = (args) => {
  const [selectValue, setSelectValue] = useState('');

  args.value = selectValue;
  args.onChange = (e) => setSelectValue(e.target.value);

  return (
    <ThemeSelector>
      <Select {...args} style={{ width: '220px' }}>
        <MenuItem value={1}>{'Item 1'}</MenuItem>
        <MenuItem value={2}>{'Item 2'}</MenuItem>
      </Select>
    </ThemeSelector>
  );
};

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
  startAdornment: 'Kg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  helperText: 'Helper text',
  disabled: true,
};
