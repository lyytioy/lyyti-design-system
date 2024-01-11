import { StoryFn, Meta } from '@storybook/react';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import NumberInput, { NumberInputProps } from '../../src/components/NumberInput';

export default {
  title: 'Components/Inputs/NumberInput',
  component: NumberInput,
  parameters: {
    docs: {
      description: {
        component: 'NumberInput lets users enter and edit a number value without special characters.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    placeholder: {
      description: 'The short hint displayed in the input before the user enters a value.',
    },
    label: {
      description: 'The label content.',
    },
    startAdornment: {
      description: 'This can be used to add a prefix or an action to the start of an input.',
    },
    endAdornment: {
      description: 'This can be used to add a suffix or an action to the end of an input.',
    },
  },
  args: {
    label: 'Label',
  },
} as Meta;

const Template: StoryFn<NumberInputProps> = (args) => <NumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};

export const Large = Template.bind({});
Large.args = {
  size: 'medium',
};

export const HelperText = Template.bind({});
HelperText.args = {
  helperText: 'Helper text',
};

export const Error = Template.bind({});
Error.args = {
  helperText: 'Helper text',
  error: true,
};

export const StartAdornment = Template.bind({});
StartAdornment.args = {
  helperText: 'Helper text',
  startAdornment: 'Kg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const White = Template.bind({});
White.args = {
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
