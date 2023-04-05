import { Story, Meta } from '@storybook/react/types-6-0';
import ToggleButtonGroup, { ToggleButtonGroupProps } from '../../src/components/ToggleButtonGroup';

const options = [
  { value: 1, text: 'Option 1' },
  { value: 2, text: 'Option 2' },
  { value: 3, text: 'Option 3' },
  { value: 4, text: 'Option 4' }
];

export default {
  title: 'Components/Inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,
  argTypes: {
    
  },
} as Meta;

const Template: Story<ToggleButtonGroupProps> = (args) => <ToggleButtonGroup {...args} />;


export const Basic = Template.bind({});
Basic.args = {
  options: options,
  value: options[0].value
}