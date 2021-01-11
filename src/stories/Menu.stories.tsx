import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '../components/Menu';
import ThemeSelector from "../themes/ThemeSelector";
import { Primary as PrimaryOutlinedButton } from './OutlinedButton.stories';
import { MenuItem } from '@material-ui/core';

export default {
  title: 'Components/Menu',
  component: Menu,
} as Meta;

const Template: Story<MenuProps> = (args) => <ThemeSelector><PrimaryOutlinedButton aria-haspopup={true} aria-controls="text-only-menu" variant="outlined" color="primary" chunky={false}>Open menu</PrimaryOutlinedButton><Menu {...args} /></ThemeSelector>;

export const TextOnly = Template.bind({});
TextOnly.args = {
    id: 'text-only-menu',
    children: [<MenuItem>One</MenuItem>, <MenuItem>Two</MenuItem>],
};