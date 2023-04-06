import { Story, Meta } from '@storybook/react/types-6-0';
import Search, { SearchProps } from '../../src/components/Search';
import Box from '../../src/components/Box';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

const options = [
  { id: 1, value: 'Option 1' },
  { id: 2, value: 'Option 2' },
  { id: 3, value: 'Option 3' },
  { id: 4, value: 'Option 4' },
];

export default {
  title: 'Components/Inputs/Search',
  component: Search,
  parameters: {
    docs: {
      description: {
        component:
          'The search component can take in different options and display them as a datalist. It also works without options and functions just like a input field',
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
    adornmentOnRight: {
      description: 'Applies only to Search with no options. If true, the search icon adornment will be positioned at the end. If not set or false, adornment stays at the start.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: false,
        },
      },
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
        'If true, the Search is free solo, meaning that the user input is not bound to provided options.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    margin: {
      description:
        'If dense or normal, will adjust vertical spacing of this and contained components.',
      options: ['normal', 'dense'],
      control: { type: 'radio' },
      table: {
        defaultValue: {
          summary: 'dense',
        },
      },
    },
  },
  args: {
    disabled: false,
    label: 'Label',
    placeholder: 'Search',
    freeSolo: true,
  },
} as Meta;

const Template: Story<SearchProps> = (args) => (
  <Box sx={{ width: '300px' }}>
    <Search {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  options: options,
};

export const LargeFullwidth = Template.bind({});
LargeFullwidth.args = {
  margin: 'normal',
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

export const WithEndAdornment = Template.bind({});
WithEndAdornment.args = {
  adornmentOnRight: true
}

export const NoOptions = Template.bind({});
