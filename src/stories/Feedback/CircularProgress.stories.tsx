import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CircularProgress, { CircularProgressProps } from '../../components/CircularProgress';
import ThemeSelector from '../../themes/ThemeSelector';

export default {
  title: 'Components/Feedback/CircularProgress',
  component: CircularProgress,
} as Meta;

const Template: Story<CircularProgressProps> = (args) => (
  <ThemeSelector>
    <CircularProgress {...args} />
  </ThemeSelector>
);

export const LoadingIndicator = Template.bind({});
LoadingIndicator.args = {};
