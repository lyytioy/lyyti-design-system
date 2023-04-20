import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import type { OutlinedInputProps as MuiOutlinedInputProps, InputAdornmentProps as MuiInputAdornmentProps, OutlinedTextFieldProps, FilledInputProps, OutlinedInputProps } from '@mui/material';
import { TextFieldProps, TextInputProps } from './TextField';

export interface TimePickerProps<TDate = unknown> extends Omit<MuiTimePickerProps<TDate>, 'renderInput' | 'InputProps'> {
  InputProps?:  Partial<TextInputProps>;
  InputAdornmentProps?: Partial<MuiInputAdornmentProps>;
  OpenPickerButtonProps?: Record<string, unknown>;
  'data-testid'?: string;
}

const TimePicker = <TDate = unknown>({ ampm = false, InputProps = {}, InputAdornmentProps = {}, OpenPickerButtonProps = {}, ...props }: TimePickerProps<TDate>): JSX.Element => {
  return (
    <MuiTimePicker
      ampm={ampm}
      {...props}
      slotProps={{
        textField: {InputProps: InputProps as Partial<OutlinedInputProps>},
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
    />
  );
};

export default TimePicker;
