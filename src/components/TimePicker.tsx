import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import TextField, { TextFieldProps } from './TextField';

export interface TimePickerProps<TDate = unknown> extends Omit<MuiTimePickerProps<TDate, TDate>, 'renderInput' | 'InputProps'> {
  InputProps?: TextFieldProps;
  'data-testid'?: string;
}

const TimePicker = <TDate = unknown>({ ampm = false, InputProps = {}, ...props }: TimePickerProps<TDate>): JSX.Element => {
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
        tabIndex: -1
      }}
      renderInput={(params) => (
        <TextField {...(params as TextFieldProps)} {...InputProps} />
      )}
    />
  );
};

export default TimePicker;
