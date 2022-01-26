import Autocomplete, { AutocompleteProps } from './Autocomplete';
import { MarginTypes } from './TextField';
import { makeStyles } from '@mui/styles';
import { Clock } from '../icons';

const twentyFourHourTimes = [
  { id: '00:00', value: '00:00' },
  { id: '00:30', value: '00:30' },
  { id: '01:00', value: '01:00' },
  { id: '01:30', value: '01:30' },
  { id: '02:00', value: '02:00' },
  { id: '02:30', value: '02:30' },
  { id: '03:00', value: '03:00' },
  { id: '03:30', value: '03:30' },
  { id: '04:00', value: '04:00' },
  { id: '04:30', value: '04:30' },
  { id: '05:00', value: '05:00' },
  { id: '05:30', value: '05:30' },
  { id: '06:00', value: '06:00' },
  { id: '07:00', value: '07:00' },
  { id: '07:30', value: '07:30' },
  { id: '08:00', value: '08:00' },
  { id: '08:30', value: '08:30' },
  { id: '09:00', value: '09:00' },
  { id: '09:30', value: '09:30' },
  { id: '10:00', value: '10:00' },
  { id: '10:30', value: '10:30' },
  { id: '11:00', value: '11:00' },
  { id: '11:30', value: '11:30' },
  { id: '12:00', value: '12:00' },
  { id: '12:30', value: '12:30' },
  { id: '13:00', value: '13:00' },
  { id: '13:30', value: '13:30' },
  { id: '14:00', value: '14:00' },
  { id: '14:30', value: '14:30' },
  { id: '15:00', value: '15:00' },
  { id: '15:30', value: '15:30' },
  { id: '16:00', value: '16:00' },
  { id: '16:30', value: '16:30' },
  { id: '17:00', value: '17:00' },
  { id: '17:30', value: '17:30' },
  { id: '18:00', value: '18:00' },
  { id: '18:30', value: '18:30' },
  { id: '19:00', value: '19:00' },
  { id: '19:30', value: '19:30' },
  { id: '20:00', value: '20:00' },
  { id: '20:30', value: '20:30' },
  { id: '21:00', value: '21:00' },
  { id: '21:30', value: '21:30' },
  { id: '22:00', value: '22:00' },
  { id: '22:30', value: '22:30' },
  { id: '23:00', value: '23:00' },
  { id: '23:30', value: '23:30' },
];

const twelveHourTimes = [
  { id: '12:00 AM', value: '12:00 AM' },
  { id: '12:30 AM', value: '12:30 AM' },
  { id: '01:00 AM', value: '01:00 AM' },
  { id: '01:30 AM', value: '01:30 AM' },
  { id: '02:00 AM', value: '02:00 AM' },
  { id: '02:30 AM', value: '02:30 AM' },
  { id: '03:00 AM', value: '03:00 AM' },
  { id: '03:30 AM', value: '03:30 AM' },
  { id: '04:00 AM', value: '04:00 AM' },
  { id: '04:30 AM', value: '04:30 AM' },
  { id: '05:00 AM', value: '05:00 AM' },
  { id: '05:30 AM', value: '05:30 AM' },
  { id: '06:00 AM', value: '06:00 AM' },
  { id: '07:00 AM', value: '07:00 AM' },
  { id: '07:30 AM', value: '07:30 AM' },
  { id: '08:00 AM', value: '08:00 AM' },
  { id: '08:30 AM', value: '08:30 AM' },
  { id: '09:00 AM', value: '09:00 AM' },
  { id: '09:30 AM', value: '09:30 AM' },
  { id: '10:00 AM', value: '10:00 AM' },
  { id: '10:30 AM', value: '10:30 AM' },
  { id: '11:00 AM', value: '11:00 AM' },
  { id: '11:30 AM', value: '11:30 AM' },
  { id: '12:00 PM', value: '12:00 PM' },
  { id: '12:30 PM', value: '12:30 PM' },
  { id: '01:00 PM', value: '01:00 PM' },
  { id: '01:30 PM', value: '01:30 PM' },
  { id: '02:00 PM', value: '02:00 PM' },
  { id: '02:30 PM', value: '02:30 PM' },
  { id: '03:00 PM', value: '03:00 PM' },
  { id: '03:30 PM', value: '03:30 PM' },
  { id: '04:00 PM', value: '04:00 PM' },
  { id: '04:30 PM', value: '04:30 PM' },
  { id: '05:00 PM', value: '05:00 PM' },
  { id: '05:30 PM', value: '05:30 PM' },
  { id: '06:00 PM', value: '06:00 PM' },
  { id: '07:00 PM', value: '07:00 PM' },
  { id: '07:30 PM', value: '07:30 PM' },
  { id: '08:00 PM', value: '08:00 PM' },
  { id: '08:30 PM', value: '08:30 PM' },
  { id: '09:00 PM', value: '09:00 PM' },
  { id: '09:30 PM', value: '09:30 PM' },
  { id: '10:00 PM', value: '10:00 PM' },
  { id: '10:30 PM', value: '10:30 PM' },
  { id: '11:00 PM', value: '11:00 PM' },
  { id: '11:30 PM', value: '11:30 PM' },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    '& .MuiAutocomplete-popupIndicatorOpen': { transform: 'none' },
    padding: '0px',
  },
});

export interface TimePickerProps extends Omit<AutocompleteProps, 'renderInput' | 'options'> {
  twelvehour?: boolean;
  error?: boolean;
  helperText?: string;
  margin?: MarginTypes;
  label?: string;
  'data-testid'?: string;
}

const TimePicker = ({
  twelvehour,
  error,
  helperText,
  margin = 'dense',
  label,
  ...props
}: TimePickerProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Autocomplete
      {...props}
      freeSolo
      forcePopupIcon
      popupIcon={<Clock color="inherit" />}
      className={classes.root}
      options={twelvehour ? twelveHourTimes : twentyFourHourTimes}
      disableClearable={true}
      margin={margin}
      label={label}
      error={error}
      helperText={helperText}
    />
  );
};

TimePicker.defaultProps = {
  twelvehour: false,
};

export default TimePicker;
