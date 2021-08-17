import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Datepicker, {
  DatepickerProps,
  DatepickerRangeProps,
  DateRange,
} from '../../components/Datepicker';
import ThemeSelector from '../../themes/ThemeSelector';
import moment from 'moment';

export default {
  title: 'Components/Inputs/Date Picker',
  component: Datepicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Use to display past, present or future dates.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
  },
  args: {
    label: 'Label',
  },
} as Meta;

const DatepickerTemplate: Story<DatepickerProps> = (args) => {
  const [date, setDate] = useState<moment.Moment | null>(null);

  return (
    <ThemeSelector>
      <Datepicker {...args} date={date} onDateChange={setDate} />
    </ThemeSelector>
  );
};

const DatepickerRangeTemplate: Story<DatepickerRangeProps> = (args) => {
  const [startDate, setStartDate] = useState<moment.Moment | null>(null);
  const [endDate, setEndDate] = useState<moment.Moment | null>(null);

  const handleDatesChange = ({ startDate, endDate }: DateRange) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <ThemeSelector>
      <Datepicker
        {...args}
        range
        startDate={startDate}
        endDate={endDate}
        onDateChange={handleDatesChange}
      />
    </ThemeSelector>
  );
};

export const Default = DatepickerTemplate.bind({});
Default.args = {};

export const DatepickerRange = DatepickerRangeTemplate.bind({});
DatepickerRange.args = {};

export const DatepickerWhite = DatepickerTemplate.bind({});
DatepickerWhite.args = { color: 'white' };
DatepickerWhite.parameters = {
  backgrounds: { default: 'dark' },
};
