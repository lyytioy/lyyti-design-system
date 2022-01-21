import { Story, Meta } from '@storybook/react/types-6-0';
import TextField, { TextFieldProps } from '../../src/components/TextField';
import ThemeSelector from '../../src/themes/ThemeSelector';

export default {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    docs: {
      description: {
        component: 'Text fields let users enter and edit text.',
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#045b56' },
      ],
    },
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

const Template: Story<TextFieldProps> = (args) => (
  <ThemeSelector>
    <TextField {...args} />
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};

export const Large = Template.bind({});
Large.args = {
  margin: 'normal',
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

export const EndAdornment = Template.bind({});
EndAdornment.args = {
  helperText: 'Helper text',
  endAdornment: 'Kg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  endAdornment: 'Kg',
};

export const White = Template.bind({});
White.args = {
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};
