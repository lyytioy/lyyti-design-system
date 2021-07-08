import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import InputAdornment from '../../components/InputAdornment';
import { MenuItem } from '@material-ui/core';
import Select, { SelectProps } from '../../components/Select';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args) => (
  <ThemeSelector>
    <Select {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {
  children: <MenuItem>{'Item 1'}</MenuItem>,
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
  children: <MenuItem>{'Item 1'}</MenuItem>,
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
  children: <MenuItem>{'Item 1'}</MenuItem>,
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
  children: <MenuItem>{'Item 1'}</MenuItem>,
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
  children: <MenuItem>{'Item 1'}</MenuItem>,
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
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  helperText: 'Helper text',
  disabled: true,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export const White = Template.bind({});
White.args = {
  children: <MenuItem>{'Item 1'}</MenuItem>,
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
