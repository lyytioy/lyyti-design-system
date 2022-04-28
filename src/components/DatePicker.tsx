import MuiDatePicker, { DatePickerProps as MuiDatepickerProps } from '@mui/lab/DatePicker';
import Calendar from '../icons/Calendar';
import TextField, { TextFieldProps } from './TextField';

export interface DatePickerProps<TDate>
  extends Omit<MuiDatepickerProps<TDate>, 'renderInput' | 'InputProps'> {
  allowAllYears?: boolean;
  InputProps?: TextFieldProps;
}

const isDisallowedYear = (date: Date) => {
  const year = new Date(date).getFullYear();
  const maxYear = new Date().getFullYear() + 10;
  return year < 2006 || year > maxYear;
};

const DatePicker = ({
  allowAllYears = false,
  InputProps = { color: 'primary', id: 'datepicker' },
  ...props
}: DatePickerProps<Date>): JSX.Element => {
  return (
    <MuiDatePicker
      components={{ OpenPickerIcon: (props) => Calendar({ fontSize: 'small', ...props }) }}
      PaperProps={{
        sx: {
          '& .MuiPickersDay-today': {
            bgcolor: '#fff',
            borderColor: 'primary.main',
            color: 'primary.main',
            '&:focus': {
              bgcolor: 'common.white',
            },
          },
          '& .MuiPickersDay-root': {
            fontSize: '1rem',
            '&:hover': {
              bgcolor: 'primaryStates.selected',
              color: 'primary.main',
            },
          },
          '& .MuiPickersDay-root:not(.Mui-selected)': {
            borderColor: 'primary.main',
          },
          '& .PrivatePickersSlideTransition-root': {
            minHeight: '244px',
          },
          '& .MuiOutlinedInput-root:hover': {
            borderColor: 'common.white',
          },
          '& .PrivatePickersYear-yearButton:hover': {
            bgcolor: 'primaryStates.selected',
          },
          '& .MuiIconButton-root:hover': {
            bgcolor: 'primaryStates.selected',
          },
          ...(!allowAllYears && {
            '& .PrivatePickersYear-root': {
              height: 'min-content',
              width: 'min-content',
              '& .Mui-disabled': {
                display: 'none',
              },
            },
            '& .PrivatePickersYear-root:nth-of-type(-n+106)': {
              display: 'none',
            },
          }),
        },
      }}
      shouldDisableYear={!allowAllYears ? isDisallowedYear : undefined}
      {...props}
      renderInput={(params) => {
        return <TextField {...(params as TextFieldProps)} {...InputProps} />;
      }}
    />
  );
};

export default DatePicker;
