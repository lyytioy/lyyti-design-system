import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import DatePicker, { DatePickerProps } from '../../src/components/DatePicker';
import { LocalizationProvider } from '../../src';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import AdapterDayjs from '@date-io/dayjs';
import AdapterMoment from '@date-io/moment';

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
    showDaysOutsideCurrentMonth: {
      control: { type: 'boolean' },
      description: 'If true, days that have outsideCurrentMonth={true} are displayed.',
      table: {
        defaultValue: true,
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} as Meta;

const TemplateDateFns: Story<DatePickerProps<Date>> = (args) => {
  // Run `npm install @date-io/dayjs` to install the adapter

  // import AdapterDateFns from '@date-io/dayjs';

  const [value, setValue] = useState<Date | null>(null);

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

const TemplateMoment: Story<DatePickerProps<Date>> = (args) => {
  // Run `npm install @date-io/moment` to install the adapter

  // import AdapterMoment from '@date-io/moment';

  const [value, setValue] = useState<Date | null>(null);

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

export const Default = TemplateMoment.bind({});
Default.args = {};

export const White = TemplateMoment.bind({});
White.args = {
  label: 'Event date',
  InputProps: { color: 'white' },
  showDaysOutsideCurrentMonth: false,
  allowAllYears: true,
};
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const DateFns = TemplateDateFns.bind({});
DateFns.args = {
  InputProps: { label: 'Birthday' },
  showDaysOutsideCurrentMonth: false,
  allowAllYears: true,
};
