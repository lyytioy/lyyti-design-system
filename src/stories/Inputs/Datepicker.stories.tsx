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
  argTypes: {
    locale: {
      options: [
        'da',
        'de',
        'en',
        'es',
        'et',
        'fi',
        'fr',
        'hr',
        'it',
        'lv',
        'nl',
        'no',
        'pl',
        'pt',
        'ru',
        'sv',
        'th',
        'zh',
        'yue',
      ],
      control: {
        type: 'select',
      },
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
Default.args = { id: 'defaultDatepicker' };

export const DatepickerRangeLarge = DatepickerRangeTemplate.bind({});
DatepickerRangeLarge.args = {
  margin: 'normal',
  startDateId: 'start1',
  endDateId: 'end1',
};

export const DatepickerWhiteFullwidth = DatepickerTemplate.bind({});
DatepickerWhiteFullwidth.args = {
  id: 'fullwidthDatepicker',
  color: 'white',
  fullwidth: true,
  showClearDate: true,
  margin: 'normal',
};
DatepickerWhiteFullwidth.parameters = {
  backgrounds: { default: 'dark' },
};

export const DatepickerRangeFullwidth = DatepickerRangeTemplate.bind({});
DatepickerRangeFullwidth.args = {
  fullwidth: true,
  startDateId: 'start2',
  endDateId: 'end2',
  showClearDates: true,
};
