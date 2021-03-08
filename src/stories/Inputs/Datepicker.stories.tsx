import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Datepicker from '../../components/Datepicker';
import ThemeSelector from '../../themes/ThemeSelector';

export default {
  title: 'Components/Inputs/Date Picker',
  component: Datepicker,
} as Meta;

const Template: Story = (args) => (
  <ThemeSelector>
    <Datepicker {...args} />
  </ThemeSelector>
);

export const Primary = Template.bind({});
Primary.args = {};
