import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import DateRangePicker, { DateRangePickerProps, DateRange } from '../../components/DateRangePicker';
import ThemeSelector from '../../themes/ThemeSelector';
import moment from 'moment';

export default {
  title: 'Components/Inputs/Date Range Picker',
  component: DateRangePicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Use to select a range of dates.',
      },
    },
  },
  args: {
    label: 'Label',
  },
} as Meta;

const Template: Story<DateRangePickerProps> = (args) => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

  const handleDatesChange = ({ startDate, endDate }: DateRange) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <ThemeSelector>
      <DateRangePicker
        {...args}
        startDate={startDate}
        endDate={endDate}
        onDatesChange={handleDatesChange}
      />
    </ThemeSelector>
  );
};

export const Default = Template.bind({});
Default.args = {};
