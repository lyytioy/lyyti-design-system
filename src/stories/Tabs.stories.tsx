import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tabs, { TabsProps } from '../components/Tabs';
import ThemeSelector from "../themes/ThemeSelector";
import Tab from '../components/Tab';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => <ThemeSelector><Tabs {...args} /></ThemeSelector>;

export const Horizontal = Template.bind({});
Horizontal.args = {
    indicatorColor: 'primary',
    textColor: 'primary',
    value: 0,
    children: [
      <Tab label="Active"/>,
      <Tab label="Default"/>,
      <Tab label="Disabled" disabled/>,
      <Tab label="Wrapped text label" wrapped/>
    ]
};

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: 'vertical',
    indicatorColor: 'secondary',
    textColor: 'secondary',
    value: 1,
    children: [
      <Tab label="Default"/>,
      <Tab label="Active"/>,
      <Tab label="Disabled" disabled/>,
      <Tab label="Wrapped text label" wrapped/>
    ]
};