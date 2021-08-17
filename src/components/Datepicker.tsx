import { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, FocusedInputShape } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import InputLabel from './InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import ChevronLeft from '../icons/ChevronLeft';
import ChevronRight from '../icons/ChevronRight';
import { MarginTypes } from './TextField';
import { ArrowRight, Calendar } from '../icons';

export const useStyles = makeStyles<Theme, UseStylesProps>((theme) =>
  createStyles({
    root: {
      ...theme.typography.body1,
      color: theme.palette.text.primary,
      display: 'inline-flex',
      flexDirection: 'column',
      verticalAlign: 'top',
      width: (props) => (props.fullwidth ? '100%' : undefined),
      '& label': {
        color: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.grey[400],
        letterSpacing: '0.15px',
        lineHeight: '26px',
      },
      '& .DateInput': {
        background: 'none',
        flex: 1,
        width: 'initial',
      },
      '& .DateInput_input': {
        background: 'none',
        border: 0,
        boxSizing: 'content-box',
        color: (props) => (props.color === 'white' ? theme.palette.common.white : 'currentColor'),
        font: 'inherit',
        height: '1.1876em',
        lineHeight: 'inherit',
        padding: (props) => (props.margin === 'dense' ? '10.5px 14px' : '18.5px 14px'),
        '&::placeholder': {
          color: (props) =>
            props.color === 'white'
              ? theme.palette.lightStates.disabledBg
              : theme.palette.text.secondary,
        },
      },
      '& .SingleDatePickerInput': {
        background: 'none',
        width: '100%',
      },
      '& .SingleDatePickerInput__withBorder': {
        borderColor: (props) =>
          props.color === 'white' ? theme.palette.common.white : 'rgba(0, 0, 0, 0.23)',
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
        display: 'flex',
      },
      '& .SingleDatePickerInput__withBorder:hover': {
        borderColor: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .SingleDatePickerInput_calendarIcon': {
        color: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.grey[400],
        lineHeight: 1,
        marginRight: 8,
        padding: 0,
      },
      '& .DateRangePickerInput': {
        background: 'none',
        width: '100%',
      },
      '& .DateRangePickerInput__withBorder': {
        borderColor: (props) =>
          props.color === 'white' ? theme.palette.common.white : 'rgba(0, 0, 0, 0.23)',
        borderRadius: theme.shape.borderRadius,
        boxSizing: 'border-box',
        display: 'flex',
      },
      '& .DateRangePickerInput__withBorder:hover': {
        borderColor: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .DateRangePickerInput_calendarIcon': {
        color: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.grey[400],
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
      '& .SingleDatePickerInput__withBorder': {
        borderColor: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .SingleDatePickerInput_calendarIcon': {
        color: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .DateRangePickerInput__withBorder': {
        borderColor: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.primary.main,
      },
      '& .DateRangePickerInput_calendarIcon': {
        color: (props) =>
          props.color === 'white' ? theme.palette.common.white : theme.palette.primary.main,
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
    arrowIcon: {
      height: '100%',
    },
  })
);

export interface DateRange {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
}

type DatepickerCallback = (date: moment.Moment | null) => void;
type DateRangeCallback = (arg: DateRange) => void;
type ColorTypes = 'default' | 'white';

export interface DatepickerProps extends Record<string, unknown> {
  color?: ColorTypes;
  /** Selected date. */
  date: moment.Moment | null;
  fullwidth?: boolean;
  /** Date pickers need to have a unique id.  */
  id: string;
  /** Label for the date picker input field. */
  label?: string;
  /** Determines date localization. */
  locale?: string;
  /** Defines the look of the input element. */
  margin?: MarginTypes;
  /** Number of months displayed on the date picker. */
  numberOfMonths?: number;
  /** Function to control changing the date. */
  onDateChange: DatepickerCallback;
  placeholder?: string;
  /** Changes between date picker and date range picker */
  range?: boolean;
}

export interface DatepickerRangeProps
  extends Omit<DatepickerProps, 'onDateChange' | 'date'>,
    DateRange {
  startDateId?: string;
  endDateId?: string;
  /** Changes between date picker and date range picker */
  range: boolean;
  onDateChange: DateRangeCallback;
  fullwidth?: boolean;
}

interface UseStylesProps {
  color: ColorTypes;
  fullwidth: boolean;
  margin: MarginTypes;
}

function Datepicker(props: DatepickerRangeProps): JSX.Element;
function Datepicker(props: DatepickerProps): JSX.Element;
function Datepicker(props: Record<string, unknown>): JSX.Element {
  const {
    color = 'default',
    date,
    fullwidth = false,
    id = 'datepicker',
    label,
    locale = 'en',
    margin = 'dense',
    numberOfMonths = 2,
    onDateChange,
    placeholder = moment(Date.now()).format('D.M.Y'),
  } = props as DatepickerProps;

  const range = !!props?.range;

  const classes = useStyles({ color, fullwidth, margin });
  let datepicker: JSX.Element;

  useEffect(() => {
    moment.locale(locale);
  }, [locale]);

  const [focused, setFocused] = useState<boolean | FocusedInputShape | null>(null);
  type Focused = { focused: typeof focused };
  const handleFocusChange = (arg: Focused | FocusedInputShape) => {
    if (arg && Object.keys(arg).includes('focused')) {
      setFocused((arg as Focused)?.focused);
    } else {
      setFocused(arg as FocusedInputShape);
    }
  };

  const previousIcon = (
    <span className={`${classes.navButton} ${classes.navPrev}`}>
      <ChevronLeft />
    </span>
  );

  const nextIcon = (
    <span className={`${classes.navButton} ${classes.navNext}`}>
      <ChevronRight />
    </span>
  );

  if (range) {
    const {
      startDateId = 'start_id',
      endDateId = 'end_id',
      startDate,
      endDate,
      onDateChange: onDatesChange,
    } = props as DatepickerRangeProps;

    datepicker = (
      <div className={`${classes.root} ${focused ? classes.focused : ''}`}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <DateRangePicker
          startDateId={startDateId}
          endDateId={endDateId}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focused as FocusedInputShape}
          onDatesChange={onDatesChange}
          onFocusChange={handleFocusChange as unknown as () => void}
          customInputIcon={<Calendar />}
          customArrowIcon={<ArrowRight className={classes.arrowIcon} />}
          inputIconPosition="after"
          numberOfMonths={numberOfMonths}
          navPrev={previousIcon}
          navNext={nextIcon}
          hideKeyboardShortcutsPanel
          firstDayOfWeek={1}
        />
      </div>
    );
  } else {
    datepicker = (
      <div className={`${classes.root} ${focused ? classes.focused : ''}`}>
        {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
        <SingleDatePicker
          id={id}
          date={date}
          focused={!!focused}
          onDateChange={onDateChange as DatepickerCallback}
          onFocusChange={handleFocusChange}
          customInputIcon={<Calendar />}
          inputIconPosition="after"
          numberOfMonths={numberOfMonths}
          navPrev={previousIcon}
          navNext={nextIcon}
          hideKeyboardShortcutsPanel
          firstDayOfWeek={1}
          placeholder={placeholder}
        />
      </div>
    );
  }

  return datepicker;
}

export default Datepicker;
