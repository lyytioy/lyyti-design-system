import MuiTimePicker, { TimePickerProps as MuiTimePickerProps } from '@mui/lab/TimePicker';
import TextField, { TextFieldProps } from './TextField';

export interface TimePickerProps extends Omit<MuiTimePickerProps, 'renderInput' | 'InputProps'> {
  InputProps?: TextFieldProps;
  'data-testid'?: string;
}

const TimePicker = ({ ampm = false, InputProps = {}, ...props }: TimePickerProps): JSX.Element => {
  return (
    <MuiTimePicker
      ampm={ampm}
      open={false}
      {...props}
      OpenPickerButtonProps={{
        sx: {
          pointerEvents: 'none',
        },
      }}
      renderInput={(params) => <TextField {...(params as TextFieldProps)} {...InputProps} />}
    />
  );
};

export default TimePicker;
