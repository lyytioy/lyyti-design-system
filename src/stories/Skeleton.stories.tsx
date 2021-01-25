import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Skeleton, { SkeletonProps } from '../components/Skeleton';
import ThemeSelector from '../themes/ThemeSelector';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as Meta;

const Template: Story<SkeletonProps> = (args) => (
  <ThemeSelector>
    <Skeleton {...args} />
  </ThemeSelector>
);

export const Text = Template.bind({});
Text.args = {
  animation: 'wave',
  variant: 'text',
  width: 400,
  height: 50,
};

export const Circle = Template.bind({});
Circle.args = {
  animation: 'wave',
  variant: 'circle',
  width: 200,
  height: 200,
};

export const Rect = Template.bind({});
Rect.args = {
  animation: 'wave',
  variant: 'rect',
  width: 300,
  height: 300,
};
