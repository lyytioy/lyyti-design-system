import {
  TimePicker as MuiResponsiveTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import { DesktopTimePicker as MuiDesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import type { FormHelperTextProps, InputLabelProps, InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';
import { TextInputProps } from './TextField';

export interface TimePickerProps<TDate = unknown> extends Omit<MuiTimePickerProps<TDate>, 'renderInput' | 'InputProps'> {
  InputProps?:  Partial<TextInputProps>;
  helperText?: string;
  FormHelperTextProps?: FormHelperTextProps;
  InputAdornmentProps?: Partial<MuiInputAdornmentProps>;
  InputLabelProps?: Partial<InputLabelProps>;
  OpenPickerButtonProps?: Record<string, unknown>;
  'data-testid'?: string;
  variant?: 'desktop' | 'responsive';
}

const TimePicker = <TDate = unknown>({ 
  ampm = false, 
  InputProps = {}, 
  InputAdornmentProps = {}, 
  OpenPickerButtonProps = {}, 
  helperText, 
  FormHelperTextProps, 
  InputLabelProps,
  variant = 'responsive', 
  ...props 
}: TimePickerProps<TDate>): JSX.Element => {
  const MuiTimePicker = variant === 'desktop' ? MuiDesktopTimePicker : MuiResponsiveTimePicker;
  return (
    <MuiTimePicker
      ampm={ampm}
      slotProps={{
        textField: {InputProps, helperText, FormHelperTextProps, InputLabelProps},
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
