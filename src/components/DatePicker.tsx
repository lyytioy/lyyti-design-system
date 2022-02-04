import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatepickerProps } from '@mui/lab';
import Calendar from '../icons/Calendar';
import TextField, { ColorTypes, TextFieldProps } from './TextField';

export interface DatePickerProps<TDate> extends Omit<MuiDatepickerProps<TDate>, 'renderInput'> {
  color?: ColorTypes;
  allowAllYears?: boolean;
  renderInput?: MuiDatepickerProps['renderInput'];
}

const isDisallowedYear = (date: Date) => {
  const year = new Date(date).getFullYear();
  const maxYear = new Date().getFullYear() + 10;
  return year < 2006 || year > maxYear;
};

const DatePicker = ({
  allowAllYears = false,
  color = 'primary',
  showDaysOutsideCurrentMonth = true,
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
      showDaysOutsideCurrentMonth={showDaysOutsideCurrentMonth}
      renderInput={(params) => {
        return <TextField {...(params as TextFieldProps)} color={color} />;
      }}
      {...props}
    />
  );
};

export default DatePicker;
