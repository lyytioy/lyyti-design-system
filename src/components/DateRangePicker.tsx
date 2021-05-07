import { useState, useEffect } from 'react';
import 'react-dates/initialize';
import { DateRangePicker as AirBnbDateRangePicker, FocusedInputShape } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import InputLabel from './InputLabel';
import Calendar from './icons/Calendar';
import ChevronLeft from './icons/ChevronLeft';
import ChevronRight from './icons/ChevronRight';
import { useStyles } from './Datepicker';

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

const DateRangePicker = ({
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
  const classes = useStyles({ margin });

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

export default DateRangePicker;
