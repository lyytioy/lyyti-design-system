import { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
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
      '& .SingleDatePickerInput': {
        background: 'none',
      },
      '& .SingleDatePickerInput__withBorder': {
        borderColor: borderColor,
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
      },
      '& .SingleDatePickerInput__withBorder:hover': {
        borderColor: theme.palette.primary.main,
      },
      '& .SingleDatePickerInput_calendarIcon': {
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
    },
    focused: {
      '& label': {
        color: theme.palette.text.primary,
      },
      '& .SingleDatePickerInput__withBorder': {
        borderColor: theme.palette.primary.main,
      },
      '& .SingleDatePickerInput_calendarIcon': {
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

export interface DatepickerProps {
  date: moment.Moment | null;
  id: string;
  label?: string;
  locale?: string;
  margin?: 'dense' | 'normal';
  numberOfMonths?: number;
  onDateChange: (date: moment.Moment | null) => void;
}

const Datepicker = ({
  date,
  id = 'datepicker',
  label,
  locale = 'en',
  margin = 'dense',
  numberOfMonths = 1,
  onDateChange,
}: DatepickerProps): JSX.Element => {
  const classes = useStyles();

  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  const [focused, setFocused] = useState(false);

  const handleFocusChange = (arg: { focused: typeof focused }) => {
    setFocused(arg.focused);
  };

  return (
    <div className={`${classes.root} ${focused ? classes.focused : ''}`}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <SingleDatePicker
        id={id}
        date={date}
        focused={focused}
        onDateChange={onDateChange}
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
