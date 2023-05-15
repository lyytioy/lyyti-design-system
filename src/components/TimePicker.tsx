import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import type { FormHelperTextProps, InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';
import { TextInputProps } from './TextField';

export interface TimePickerProps<TDate = unknown> extends Omit<MuiTimePickerProps<TDate>, 'renderInput' | 'InputProps'> {
  InputProps?:  Partial<TextInputProps>;
  helperText?: string;
  FormHelperTextProps?: FormHelperTextProps;
  InputAdornmentProps?: Partial<MuiInputAdornmentProps>;
  OpenPickerButtonProps?: Record<string, unknown>;
  'data-testid'?: string;
}

const TimePicker = <TDate = unknown>({ ampm = false, InputProps = {}, InputAdornmentProps = {}, OpenPickerButtonProps = {}, helperText, FormHelperTextProps, ...props }: TimePickerProps<TDate>): JSX.Element => {
  return (
    <MuiTimePicker
      ampm={ampm}
      slotProps={{
        textField: {InputProps, helperText, FormHelperTextProps},
        inputAdornment: {
          sx: {
            ml: '0px',
          },
          ...InputAdornmentProps
        },
        openPickerButton: {
          sx: {
            pointerEvents: 'none',
          },
          tabIndex: -1,
          ...OpenPickerButtonProps
        }
      }}
      {...props}
    />
  );
};

export default TimePicker;
