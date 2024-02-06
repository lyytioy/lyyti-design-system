import { Meta, StoryFn } from '@storybook/react';
import DropdownMenu, { DropdownProps } from '../../src/components/DropdownMenu';
import {
  CalendarTodayRounded,
  ExpandMoreRounded,
  ShortTextRounded,
  RectangleRounded,
  RadioButtonCheckedRounded,
} from '../../src/icons';

export default {
  title: 'Components/Navigation/Menu',
  component: DropdownMenu,
} as Meta;

const menuItems = [
  { id: 1, title: 'Menu item 1' },
  { id: 2, title: 'Menu item 2' },
  { id: 3, title: 'Menu item 3' },
];

const menuItems2 = [
  { id: 1, title: 'Menu item 1', icon: <CalendarTodayRounded fontSize="small" /> },
  { id: 2, title: 'Menu item 2', icon: <RectangleRounded fontSize="small" /> },
  { id: 3, title: 'Menu item 2', icon: <RadioButtonCheckedRounded fontSize="small" /> },
];

const Template: StoryFn<DropdownProps> = (args) => <DropdownMenu {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
  title: 'Open menu',
  items: menuItems,
  buttonProps: {
    children: '',
    variant: 'outlined',
    color: 'primary',
  },
};

export const DropdownIcons = Template.bind({});
DropdownIcons.args = {
  title: 'Open menu',
  items: menuItems2,
  subtitle: 'Subtitle',
  buttonProps: {
    children: '',
    color: 'primary',
    endIcon: <ExpandMoreRounded />,
  },
  menuItemProps: { sx: { py: 1.5, pl: 3 } },
  textProps: { color: 'primary' },
};

export const DropdownButtonPropsChildren = Template.bind({});
DropdownButtonPropsChildren.args = {
  items: menuItems2,
  buttonProps: {
    variant: 'icon',
    children: <ShortTextRounded />,
  },
};
