import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Datepicker, { DatepickerProps } from '../../components/Datepicker';
import ThemeSelector from '../../themes/ThemeSelector';
import moment from 'moment';

export default {
  title: 'Components/Inputs/Date Picker',
  component: Datepicker,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Use to display past, present or future dates or times.',
      },
    },
  },
} as Meta;

const Template: Story<DatepickerProps> = (args) => {
  const [date, setDate] = useState<moment.Moment | null>(null);

  return (
    <ThemeSelector>
      <Datepicker {...args} date={date} onDateChange={(e) => setDate(e)} />
    </ThemeSelector>
  );
};

export const Default = Template.bind({});
Default.args = {
  locale: 'en-US',
  label: 'Label',
};
