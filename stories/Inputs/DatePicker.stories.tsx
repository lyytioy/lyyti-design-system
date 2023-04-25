import { StoryFn, Meta } from '@storybook/react';
import { useState } from 'react';
import DatePicker, { DatePickerProps } from '../../src/components/DatePicker';
import { LocalizationProvider } from '../../src';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import dayjs, { Dayjs } from 'dayjs';
import moment, { Moment } from 'moment';

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `Date pickers let the user select a date.

This component relies on the date management library of your choice. It supports date-fns, luxon, dayjs, moment and any other library via a @date-io adapter interface.

Please install any of these date management libraries, @date-io adapter for it and set up the right date engine by wrapping your root (or the highest level you wish the pickers to be available) with LocalizationProvider and pass the adapter and locale to it. @date-io adapters can be found at https://github.com/dmtrKovalenko/date-io. Usage examples can be found by clicking the "show code" button in the stories.`,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    value: {
      control: 'object',
      type: { name: 'string', required: true },
      description: 'The value of the picker.',
      table: {
        type: {
          summary: 'any | Date | number | string',
        },
      },
    },
    onChange: {
      control: { type: 'null' },
      type: { name: 'string', required: true },
      description: 'Callback fired when the value (the selected date) changes @DateIOType.',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the picker.',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta;

const TemplateDateJs: StoryFn<DatePickerProps<Dayjs>> = (args) => {
  // Run `npm install @date-io/dayjs` to install the adapter

  // import AdapterDateFns from '@date-io/dayjs';

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

const TemplateMoment: StoryFn<DatePickerProps<Moment>> = (args) => {
  // Run `npm install @date-io/moment` to install the adapter

  // import AdapterMoment from '@date-io/moment';

  const [value, setValue] = useState<Moment | null>(moment());

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        {...args}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
};

export const Default = TemplateDateJs.bind({});
Default.args = {};

export const DateMoment = TemplateMoment.bind({});
DateMoment.args = {
  InputProps: { label: 'Birthday' },
  showDaysOutsideCurrentMonth: false,
  allowAllYears: true,
};


export const Error = TemplateDateJs.bind({});
Error.args = {
  label: 'Error',
  disabled: false,
  InputProps: { error: true, helperText: 'Invalid date', "data-testid": "datepicker" },
};
