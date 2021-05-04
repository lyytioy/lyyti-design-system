import { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { DateRangePicker as AirBnbDateRangePicker, FocusedInputShape } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import InputLabel from './InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Calendar from './icons/Calendar';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';

const useStyles = makeStyles<Theme>((theme) => {
  const borderColor =
    theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';

  return createStyles({
    root: {
      ...theme.typography.body1,
      color: theme.palette.text.primary,
      display: 'inline-flex',
      flexDirection: 'column',
      minWidth: 220,
      verticalAlign: 'top',
      '& label': {
        color: theme.palette.grey[400],
        letterSpacing: '0.15px',
        lineHeight: '26px',
      },
      '& .DateInput': {
        background: 'none',
        width: 'initial',
      },
      '& .DateInput_input': {
        background: 'none',
        border: 0,
        boxSizing: 'content-box',
        color: 'currentColor',
        font: 'inherit',
        height: '1.1876em',
        lineHeight: 'inherit',
        padding: '10.5px 14px',
        width: 'initial',
      },
      '& .DateRangePickerInput': {
        background: 'none',
      },
      '& .DateRangePickerInput__withBorder': {
        borderColor: borderColor,
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
      },
      '& .DateRangePickerInput__withBorder:hover': {
        borderColor: theme.palette.primary.main,
      },
      '& .DateRangePickerInput_calendarIcon': {
        color: theme.palette.grey[400],
        lineHeight: 1,
        marginRight: 8,
        padding: 0,
      },
      '& .CalendarMonth_caption': {
        color: theme.palette.text.primary,
      },
      '& .CalendarDay': {
        fontSize: '16px',
      },
      '& .CalendarDay__default': {
        border: 'none',
      },
      '& .CalendarDay__selected': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
      '& .CalendarDay__selected_span': {
        background: theme.palette.primaryStates.selected,
        color: theme.palette.text.primary,
      },
      '& .CalendarDay__hovered_span': {
        background: theme.palette.primaryStates.selected,
        color: theme.palette.text.primary,
      },
    },
    focused: {
      '& label': {
        color: theme.palette.text.primary,
      },
      '& .DateRangePickerInput__withBorder': {
        borderColor: theme.palette.primary.main,
      },
      '& .DateRangePickerInput_calendarIcon': {
        color: theme.palette.primary.main,
      },
    },
    navButton: {
      lineHeight: 1,
      padding: '8px',
      position: 'absolute',
      top: 16,
    },
    navPrev: {
      left: '22px',
    },
    navNext: {
      right: '22px',
    },
  });
});

export interface DateRange {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

export interface DateRangePickerProps {
  /** Date range pickers need to have a unique start date id. */
  startDateId: string;
  /** Date range pickers need to have a unique end date id. */
  endDateId: string;
  /** Selected start date. */
  startDate: moment.Moment | null;
  /** Selected end date. */
  endDate: moment.Moment | null;
  /** Label for the date picker input field. */
  label?: string;
  /** Determines date localization. */
  locale?: string;
  /** Date range pickers need to have a unique id.  */
  id: string;
  /** Defines the look of the input element. */
  margin?: 'dense' | 'normal';
  /** Number of months displayed on the date picker. */
  numberOfMonths?: number;
  /** Function to control changing the dates. */
  onDatesChange: (arg: DateRange) => void;
}

const Datepicker = ({
  startDateId = 'id_start',
  endDateId = 'id_end',
  startDate,
  endDate,
  label,
  locale = 'en',
  id,
  margin = 'dense',
  numberOfMonths = 1,
  onDatesChange,
}: DateRangePickerProps): JSX.Element => {
  const classes = useStyles();

  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

  const handleFocusChange = (focusedInput: FocusedInputShape | null) => {
    setFocusedInput(focusedInput);
  };

  return (
    <div className={`${classes.root} ${focusedInput ? classes.focused : ''}`}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <AirBnbDateRangePicker
        startDateId={startDateId}
        endDateId={endDateId}
        startDate={startDate}
        endDate={endDate}
        focusedInput={focusedInput}
        onDatesChange={onDatesChange}
        onFocusChange={handleFocusChange}
        customInputIcon={<Calendar />}
        inputIconPosition="after"
        numberOfMonths={numberOfMonths}
        navPrev={
          <span className={`${classes.navButton} ${classes.navPrev}`}>
            <ChevronLeft />
          </span>
        }
        navNext={
          <span className={`${classes.navButton} ${classes.navNext}`}>
            <ChevronRight />
          </span>
        }
        hideKeyboardShortcutsPanel
        firstDayOfWeek={1}
      />
    </div>
  );
};

export default Datepicker;
