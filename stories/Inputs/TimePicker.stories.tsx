import { StoryFn, Meta } from '@storybook/react';
import TimePicker, { TimePickerProps } from '../../src/components/TimePicker';
import Box from '../../src/components/Box';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import { LocalizationProvider } from '../../src';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export default {
  title: 'Components/Inputs/TimePicker',
  component: TimePicker,
  parameters: {
    controls: { exclude: modifyExcludedParams(['color']) },
    docs: {
      source: {
        type: 'code',
      },
      description: {
        component: `Date pickers let the user select time.

This component relies on the date management library of your choice. It supports date-fns, luxon, dayjs, moment and any other library via a @date-io adapter interface.

Please install any of these date management libraries, @date-io adapter for it and set up the right date engine by wrapping your root (or the highest level you wish the pickers to be available) with LocalizationProvider and pass the adapter and locale to it. @date-io adapters can be found at https://github.com/dmtrKovalenko/date-io. Usage examples can be found by clicking the "show code" button in the stories.`,
      },
    },
  },
  argTypes: {
    value: {
      control: { type: 'null' },
      type: { name: 'string', required: true },
      description: 'Type depends on adapter that is being used to wrap picker',
      table: {
        type: {
          summary: 'any | Date | number | string',
        },
      },
    },
    onChange: {
      control: { type: 'null' },
      type: { name: 'string', required: true },
      description: 'Callback fired when the value (the selected time) changes to @DateIOType',
      table: {
        type: {
          summary: 'func',
        },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'The label of the picker',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    ampm: {
      defaultValue: { summary: false },
      control: { type: 'boolean' },
      description: '12h/24h view for hour selection clock',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      defaultValue: { summary: false },
      control: { type: 'boolean' },
      description: 'If true, the input element will be disabled',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    readOnly: {
      defaultValue: { summary: false },
      control: { type: 'boolean' },
      description: 'If true, the input element will be read only',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
} as Meta;

const Template: StoryFn<TimePickerProps<Dayjs>> = (args) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <Box sx={{ width: '150px' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          {...args}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = { label: 'Label', ampm: false, disabled: false, readOnly: false };

export const Error = Template.bind({});
Error.args = {
  label: 'Error',
  disabled: false,
  ampm: false,
  InputProps: { error: true, helperText: 'Invalid time' },
};
