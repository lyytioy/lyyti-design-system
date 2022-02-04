import { Story, Meta } from '@storybook/react/types-6-0';
import Tooltip, { TooltipProps } from '../../src/components/Tooltip';

export default {
  title: 'Components/Data Display/Tooltip',
  component: Tooltip,
  parameters: {
    docs: {
      description: {
        component:
          'Use tooltips to display informative text when users hover over, focus on, or tap an element.',
      },
    },
  },
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <Tooltip {...args}>
    <span>{'Hover over me!'}</span>
  </Tooltip>
);

export const NoDirection = Template.bind({});
NoDirection.args = {
  title: 'My Tooltip',
  placement: 'bottom',
};

export const ArrowUp = Template.bind({});
ArrowUp.args = {
  title: 'My Tooltip',
  placement: 'bottom',
  arrow: true,
};

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  title: 'My Tooltip',
  placement: 'top',
  arrow: true,
};

export const ArrowLeft = Template.bind({});
ArrowLeft.args = {
  title: 'My Tooltip',
  placement: 'right',
  arrow: true,
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  title: 'My Tooltip',
  placement: 'left',
  arrow: true,
};
