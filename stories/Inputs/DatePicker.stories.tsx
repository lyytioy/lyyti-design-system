import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';
import DatePicker, { DatePickerProps } from '../../src/components/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'Date pickers let the user select a date. This component relies on the date management library of your choice. It supports date-fns, luxon, dayjs, moment and any other library via a public dateAdapter interface. Please install any of these libraries and set up the right date engine by wrapping your root (or the highest level you wish the pickers to be available) with LocalizationProvider.',
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
      defaultValue: true,
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} as Meta;

const TemplateMoment: Story<DatePickerProps<Date>> = (args) => {
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

const TemplateDateFns: Story<DatePickerProps<Date>> = (args) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
  color: 'white',
  showDaysOutsideCurrentMonth: false,
  allowAllYears: true,
};
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const DateFns = TemplateDateFns.bind({});
DateFns.args = {
  label: 'Birthday',
  showDaysOutsideCurrentMonth: false,
  allowAllYears: true,
};
