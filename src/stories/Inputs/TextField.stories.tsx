import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '../../components/TextField';
import ThemeSelector from '../../themes/ThemeSelector';

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  args: {
    label: 'Label',
  },
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <ThemeSelector>
    <TextField {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};

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

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  helperText: 'Helper text',
  endAdornment: 'Kg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  endAdornment: 'Kg',
};
