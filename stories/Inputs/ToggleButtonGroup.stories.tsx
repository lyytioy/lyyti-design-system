import { StoryFn, Meta } from '@storybook/react';
import ToggleButtonGroup, { ToggleButtonGroupProps, ToggleButtonOption } from '../../src/components/ToggleButtonGroup';

const options: ToggleButtonOption[] = [
  { value: '1', text: 'Option 1' },
  { value: '2', text: 'Option 2' },
  { value: '3', text: 'Option 3' },
  { value: '4', text: 'Option 4' }
];

export default {
  title: 'Components/Inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    
  },
} as Meta;

const Template: StoryFn<ToggleButtonGroupProps> = (args) => <ToggleButtonGroup {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: options,
  value: options[0].value
}
