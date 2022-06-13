import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import TextField, { TextFieldProps } from './TextField';
import { forwardRef, Ref } from 'react';

export interface TimePickerProps<TDate>
  extends Omit<MuiTimePickerProps<TDate, TDate>, 'renderInput' | 'InputProps'> {
  InputProps?: TextFieldProps;
  'data-testid'?: string;
}

const TimePicker = (
  { ampm = false, InputProps = {}, ...props }: TimePickerProps<Date>,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  return (
    <MuiTimePicker
      ampm={ampm}
      {...props}
      InputAdornmentProps={{
        sx: {
          ml: '0px',
        },
      }}
      OpenPickerButtonProps={{
        sx: {
          pointerEvents: 'none',
        },
      }}
      renderInput={(params) => (
        <TextField {...(params as TextFieldProps)} {...InputProps} ref={ref} />
      )}
    />
  );
};

export default forwardRef(TimePicker);
