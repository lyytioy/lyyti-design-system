import Autocomplete, { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import TextField from './TextField';
import { makeStyles } from '@material-ui/styles';
import { Clock } from '../icons';

const twentyFourHourTimes = [
  '00:00',
  '00:30',
  '01:00',
  '01:30',
  '02:00',
  '02:30',
  '03:00',
  '03:30',
  '04:00',
  '04:30',
  '05:00',
  '05:30',
  '06:00',
  '07:00',
  '07:30',
  '08:00',
  '08:30',
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00',
  '22:30',
  '23:00',
  '23:30',
];

const twelveHourTimes = [
  '12:00 AM',
  '12:30 AM',
  '01:00 AM',
  '01:30 AM',
  '02:00 AM',
  '02:30 AM',
  '03:00 AM',
  '03:30 AM',
  '04:00 AM',
  '04:30 AM',
  '05:00 AM',
  '05:30 AM',
  '06:00 AM',
  '07:00 AM',
  '07:30 AM',
  '08:00 AM',
  '08:30 AM',
  '09:00 AM',
  '09:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '01:00 PM',
  '01:30 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
  '05:30 PM',
  '06:00 PM',
  '07:00 PM',
  '07:30 PM',
  '08:00 PM',
  '08:30 PM',
  '09:00 PM',
  '09:30 PM',
  '10:00 PM',
  '10:30 PM',
  '11:00 PM',
  '11:30 PM',
];

const useStyles = makeStyles({
  root: { width: 'min-content', '& .MuiAutocomplete-popupIndicatorOpen': { transform: 'none' } },
});

export interface TimePickerProps
  extends AutocompleteProps<string, boolean | undefined, boolean | undefined, boolean | undefined> {
  twelvehour?: boolean;
  error?: boolean;
  helperText?: JSX.Element | string;
}

const TimePicker = ({ twelvehour, error, helperText, ...props }: TimePickerProps): JSX.Element => {
  const classes = useStyles();

  props.options = twelvehour ? twelveHourTimes : twentyFourHourTimes;
  props.disableClearable = true;
  return (
    <Autocomplete
      {...props}
      freeSolo
      forcePopupIcon
      popupIcon={<Clock color={error ? 'error' : 'primary'} />}
      className={classes.root}
      renderInput={(params) => {
        return <TextField {...params} variant="outlined" error={error} helperText={helperText} />;
      }}
    />
  );
};

TimePicker.defaultProps = {
  twelvehour: false,
};

export default TimePicker;
