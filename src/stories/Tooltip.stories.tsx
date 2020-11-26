import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tooltip, { TooltipProps } from '../components/Tooltip';
import ThemeSelector from "../themes/ThemeSelector";
import Button from "../components/Button"

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => <ThemeSelector><Tooltip {...args}><Button color="primary" variant="contained" chunky={false}>Button</Button></Tooltip></ThemeSelector>;

export const NoDirection = Template.bind({});
NoDirection.args = {
  title: "My Tooltip",
  placement: "bottom"
};

export const ArrowUp = Template.bind({});
ArrowUp.args = {
  title: "My Tooltip",
  placement: "bottom",
  arrow: true
};


export const ArrowDown = Template.bind({});
ArrowDown.args = {
  title: "My Tooltip",
  placement: "top",
  arrow: true
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  title: "My Tooltip",
  placement: "right",
  arrow: true
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  title: "My Tooltip",
  placement: "left",
  arrow: true
};