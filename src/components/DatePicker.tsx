import {
  DatePicker as MuiDatePicker,
  DatePickerProps as MuiDatepickerProps,
} from '@mui/x-date-pickers/DatePicker';
import Calendar from '../icons/Calendar';
import TextField, { TextFieldProps } from './TextField';
import { forwardRef, Ref } from 'react';

export interface DatePickerProps<TDate>
  extends Omit<MuiDatepickerProps<TDate, TDate>, 'renderInput' | 'InputProps'> {
  allowAllYears?: boolean;
  InputProps?: TextFieldProps;
}

const isDisallowedYear = (date: Date) => {
  const year = new Date(date).getFullYear();
  const maxYear = new Date().getFullYear() + 10;
  return year < 2006 || year > maxYear;
};

const DatePicker = (
  {
    allowAllYears = false,
    InputProps = { color: 'primary', id: 'datepicker' },
    ...props
  }: DatePickerProps<Date>,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  return (
    <MuiDatePicker
      components={{ OpenPickerIcon: (iconProps) => Calendar({ fontSize: 'small', ...iconProps }) }}
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
        return <TextField {...(params as TextFieldProps)} {...InputProps} ref={ref} />;
      }}
    />
  );
};

export default forwardRef(DatePicker);
