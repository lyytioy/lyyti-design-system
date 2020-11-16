import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../components/Button';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Button/Outlined',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <ThemeSelector><Button {...args} /></ThemeSelector>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
  color: 'primary',
  variant: 'outlined',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  color: 'secondary',
  variant: 'outlined',
};