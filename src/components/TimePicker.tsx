import {
  TimePicker as MuiTimePicker,
  TimePickerProps as MuiTimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import TextField, { TextFieldProps } from './TextField';

export interface TimePickerProps<TDate = unknown> extends Omit<MuiTimePickerProps<TDate, TDate>, 'renderInput' | 'InputProps'> {
  InputProps?: TextFieldProps;
  'data-testid'?: string;
}

const TimePicker = <TDate = unknown>({ ampm = false, InputProps = {}, InputAdornmentProps = {}, OpenPickerButtonProps = {}, ...props }: TimePickerProps<TDate>): JSX.Element => {
  return (
    <MuiTimePicker
      ampm={ampm}
      {...props}
      InputAdornmentProps={{
        sx: {
          ml: '0px',
        },
        ...InputAdornmentProps
      }}
      OpenPickerButtonProps={{
        sx: {
          pointerEvents: 'none',
        },
        tabIndex: -1,
        ...OpenPickerButtonProps
      }}
      renderInput={(params) => {
        const {inputProps, ...props} = InputProps;
        return <TextField {...(params as TextFieldProps)} inputProps={{...params.inputProps, ...inputProps}} {...props} />;
      }}
    />
  );
};

export default TimePicker;
