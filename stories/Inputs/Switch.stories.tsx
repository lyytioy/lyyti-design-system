import { Story, Meta } from '@storybook/react/types-6-0';
import Switch, { SwitchProps } from '../../src/components/Switch';
import FormControlLabel, { FormControlLabelProps } from '../../src/components/FormControlLabel';

export default {
  title: 'Components/Inputs/Switch',
  component: Switch,
  argTypes: {
    size: {
      options: ['small', 'medium'],
    },
  },
} as Meta;

const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

const LabelTemplate: Story<FormControlLabelProps> = (args) => <FormControlLabel {...args} />;

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

export const Label = LabelTemplate.bind({});
Label.args = {
  control: <Switch />,
  label: 'Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  checked: true,
  color: 'secondary',
};

export const Error = Template.bind({});
Error.args = {
  checked: true,
  color: 'error',
};
