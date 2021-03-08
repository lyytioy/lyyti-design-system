import { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';

const Datepicker = (): JSX.Element => {
  const [date, setDate] = useState<moment.Moment | null>(null);
  const [focused, setFocused] = useState(false);

  const handleDateChange = (obj: typeof date) => {
    setDate(obj);
  };

  const handleFocusChange = (arg: { focused: typeof focused }) => {
    setFocused(arg.focused);
  };

  return (
    <SingleDatePicker
      id="foo"
      date={date}
      focused={focused}
      onDateChange={handleDateChange}
      onFocusChange={handleFocusChange}
    />
  );
};

export default Datepicker;
