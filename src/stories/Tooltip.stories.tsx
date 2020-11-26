import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Tooltip, { TooltipProps } from '../components/Tooltip';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const SomeContent = React.forwardRef<HTMLDivElement>((props, ref) => <div {...props} ref={ref}>Hover over me!</div>);

const Template: Story<TooltipProps> = (args) => 
<ThemeSelector>
  <Tooltip {...args}>
    <SomeContent />
  </Tooltip>
</ThemeSelector>;

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