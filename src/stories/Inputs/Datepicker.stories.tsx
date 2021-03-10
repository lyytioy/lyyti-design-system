import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Datepicker, { DatepickerProps } from '../../components/Datepicker';
import ThemeSelector from '../../themes/ThemeSelector';
import moment from 'moment';

export default {
  title: 'Components/Inputs/Date Picker',
  component: Datepicker,
  parameters: {
    layout: 'padded',
  },
} as Meta;

const Template: Story<DatepickerProps> = (args) => (
  <ThemeSelector>
    <Datepicker {...args} />
  </ThemeSelector>
);

export const Primary = Template.bind({});
Primary.args = {
  date: moment(),
  id: 'datepicker',
  locale: 'en-US',
  label: 'Label',
  onDateChange: (date) => console.log,
};
