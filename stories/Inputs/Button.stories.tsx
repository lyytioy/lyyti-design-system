import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from '../../src/components/Button';
import { Bin } from '../../src/icons';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    color: {
      defaultValue: 'primary',
      table: { defaultValue: { summary: 'primary' } },
    },
    variant: {
      defaultValue: 'contained',
      table: { defaultValue: { summary: 'contained' } },
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: 'false',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    children: 'Button',
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Large = Template.bind({});
Large.args = { size: 'large' };

export const Small = Template.bind({});
Small.args = { size: 'small' };

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};

export const Success = Template.bind({});
Success.args = { color: 'success' };

export const Warning = Template.bind({});
Warning.args = { color: 'warning' };

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};

export const ContainedDisabled = Template.bind({});
ContainedDisabled.args = {
  size: 'large',
  disabled: true,
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  variant: 'outlined',
  disabled: true,
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  variant: 'text',
  size: 'small',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  startIcon: <Bin />,
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  variant: 'icon',
  children: <Bin />,
};

export const IconError = Template.bind({});
IconError.args = {
  variant: 'icon',
  children: <Bin />,
  color: 'error',
};

export const IconSecondary = Template.bind({});
IconSecondary.args = {
  variant: 'icon',
  color: 'secondary',
  children: <Bin />,
};

export const IconDisabled = Template.bind({});
IconDisabled.args = {
  variant: 'icon',
  children: <Bin />,
  disabled: true,
};

export const Fab = Template.bind({});
Fab.args = {
  variant: 'fab',
  children: <Bin />,
};

export const WhiteIconButton = Template.bind({});
WhiteIconButton.args = {
  variant: 'icon',
  color: 'white',
  children: <Bin />,
};
WhiteIconButton.parameters = {
  backgrounds: { default: 'dark' },
};
