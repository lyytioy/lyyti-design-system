import { Story, Meta } from '@storybook/react/types-6-0';
import Autocomplete, { AutocompleteProps } from '../../src/components/Autocomplete';
import Box from '../../src/components/Box';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

const options = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
  { id: 3, value: 'Option 3' },
  { id: 4, value: 'Option 4' },
];

const groupedOptions = [
  { id: 1, value: 'A Option' },
  { id: 2, value: 'B Option' },
  { id: 3, value: 'C Option' },
  { id: 4, value: 'D Option' },
];

export default {
  title: 'Components/Inputs/Autocomplete',
  component: Autocomplete,
  parameters: {
    docs: {
      description: {
        component:
          'The autocomplete is a normal text input enhanced by a panel of suggested options.',
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
    options: {
      description: 'Array of options, expects a array of objects that contain id and value',
    },
    disabled: {
      description: 'If true, the input element will be disabled.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    fullWidth: {
      description: 'If true, the input will take up the full width of its container.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    freeSolo: {
      description:
        'If true, the Autocomplete is free solo, meaning that the user input is not bound to provided options.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
  },
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Autocomplete',
  },
} as Meta;

const Template: Story<AutocompleteProps> = (args) => (
  <Box sx={{ width: '300px' }}>
    <Autocomplete {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  options: options,
};

export const LargeFullwidth = Template.bind({});
LargeFullwidth.args = {
  options: options,
  fullWidth: true,
};

export const White = Template.bind({});
White.args = {
  options: options,
  color: 'white',
};
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const Grouped = Template.bind({});
Grouped.args = {
  options: groupedOptions,
  fullWidth: true,
  groupBy: (option) => option.value.split(' ')[0],
};
