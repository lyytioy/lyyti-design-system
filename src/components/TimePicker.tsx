import { TimePickerProps as MuiTimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers';
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
      }}
      renderInput={(params) => (
        <TextField {...(params as TextFieldProps)} {...InputProps} />
      )}
    />
  );
};

export default TimePicker;
