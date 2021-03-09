import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import TimePicker, { TimePickerProps } from '../../components/TimePicker';

export default {
  title: 'Components/Inputs/TimePicker',
  component: TimePicker,
} as Meta;

const Template: Story<TimePickerProps> = (args) => (
  <ThemeSelector>
    <TimePicker {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {};

export const TwelveHour = Template.bind({});
TwelveHour.args = { twelvehour: true };
