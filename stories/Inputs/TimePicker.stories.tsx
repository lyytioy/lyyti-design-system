import { Story, Meta } from '@storybook/react/types-6-0';
import TimePicker, { TimePickerProps } from '../../src/components/TimePicker';
import Box from '../../src/components/Box';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

export default {
  title: 'Components/Inputs/TimePicker',
  component: TimePicker,
  parameters: {
    controls: { exclude: modifyExcludedParams(['color']) },
  },
} as Meta;

const Template: Story<TimePickerProps> = (args) => (
  <Box sx={{ width: '125px' }}>
    <TimePicker {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = { label: 'Label' };

export const LargeTwelveHour = Template.bind({});
LargeTwelveHour.args = { twelvehour: true, size: 'medium' };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Error = Template.bind({});
Error.args = { error: true, helperText: 'The date was bad' };
