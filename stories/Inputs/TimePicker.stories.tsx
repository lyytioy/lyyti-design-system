import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../src/themes/ThemeSelector';
import TimePicker, { TimePickerProps } from '../../src/components/TimePicker';

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
Default.args = { label: 'Label' };

export const LargeTwelveHour = Template.bind({});
LargeTwelveHour.args = { twelvehour: true, margin: 'normal' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Error = Template.bind({});
Error.args = { error: true, helperText: 'The date was bad' };
