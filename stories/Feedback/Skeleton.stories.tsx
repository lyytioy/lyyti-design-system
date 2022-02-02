import { Story, Meta } from '@storybook/react/types-6-0';
import Skeleton, { SkeletonProps } from '../../src/components/Skeleton';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

export default {
  title: 'Components/Data Display/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: 'Fill this in from zeroheight',
      },
    },
    controls: { exclude: modifyExcludedParams(['height', 'width']) },
  },
  argTypes: {
    animation: {
      options: [false, 'wave', 'pulse'],
      description: 'The animation. If false the animation effect is disabled.',
    },
    height: {
      control: { type: 'number' },
      description:
        "Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance a card.",
    },
    width: {
      control: { type: 'number' },
      description:
        'Width of the skeleton. Useful when the skeleton is inside an inline element with no width of its own.',
    },
    variant: {
      description: 'The type of content that will be rendered.',
    },
  },
} as Meta;

const Template: Story<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  width: 400,
  height: 50,
};

export const Circle = Template.bind({});
Circle.args = {
  variant: 'circular',
  width: 200,
  height: 200,
};

export const Rect = Template.bind({});
Rect.args = {
  variant: 'rectangular',
  width: 300,
  height: 300,
};
