import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import ToastNotification, { ToastNotificationProps } from '../../components/ToastNotification';
import ThemeSelector from '../../themes/ThemeSelector';
import Switch from '../../components/Switch';

export default {
  title: 'Components/Feedback/ToastNotification',
  component: ToastNotification,
} as Meta;

const Template: Story<ToastNotificationProps> = (args) => (
  <ThemeSelector>
    <Switch />
    <ToastNotification {...args} />
  </ThemeSelector>
);

export const Success = Template.bind({});
Success.args = {
  alertProps: { severity: 'success', variant: 'outlined', color: 'success' },
  slideProps: { direction: 'left' },
};
