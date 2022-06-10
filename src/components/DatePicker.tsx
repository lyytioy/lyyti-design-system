import { DatePickerProps as MuiDatepickerProps } from '@mui/x-date-pickers/DatePicker';
import { DatePicker as MuiDatePicker, MuiPickersAdapterContext } from '@mui/x-date-pickers';
import Calendar from '../icons/Calendar';
import TextField, { TextFieldProps } from './TextField';
import { forwardRef, Ref, useContext } from 'react';
import { Dayjs } from 'dayjs';
import { MuiPickersAdapterContextValue } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider';
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals/models';

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export interface DatePickerProps<TInputDate = Dayjs, TDate = Dayjs>
  extends Omit<MuiDatepickerProps<TInputDate, TDate>, 'renderInput' | 'InputProps'> {
  allowAllYears?: boolean;
  InputProps?: TextFieldProps;
}

const isDisallowedYear = (date: any, adapter: MuiPickersAdapter<unknown>) => {
  const year = adapter.getYear(date);
  const maxYear = new Date().getFullYear() + 10;
  return year < 2006 || year > maxYear;
};

const DatePicker = <TInputDate extends unknown, TDate extends unknown>(
  {
    allowAllYears = false,
    InputProps = { color: 'primary', id: 'datepicker' },
    ...props
  }: DatePickerProps<TInputDate, TDate>,
  ref: Ref<HTMLInputElement>
): JSX.Element => {
  const { utils } = useContext(MuiPickersAdapterContext) as MuiPickersAdapterContextValue<unknown>;

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
      shouldDisableYear={(year) => !allowAllYears ? isDisallowedYear(year, utils) : false}
      {...props}
      renderInput={(params) => {
        return <TextField {...(params as TextFieldProps)} {...InputProps} ref={ref} />;
      }}
    />
  );
};

export default forwardRef(DatePicker);
