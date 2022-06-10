import { TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers';
import TextField, { TextFieldProps } from './TextField';
import { forwardRef, Ref } from 'react';
import { Dayjs } from 'dayjs';

export interface TimePickerProps<TInputDate = Dayjs, TDate = Dayjs> extends Omit<MuiTimePickerProps<TInputDate, TDate>, 'renderInput' | 'InputProps'> {
  InputProps?: TextFieldProps;
  'data-testid'?: string; 
}

const TimePicker = <TInputDate = Dayjs, TDate = Dayjs>(
  { ampm = false, InputProps = {}, ...props }: TimePickerProps<TInputDate, TDate>,
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
