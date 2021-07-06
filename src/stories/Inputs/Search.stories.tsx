import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from '../../themes/ThemeSelector';
import Search, { SearchProps } from '../../components/Search';

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
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    adornment: { table: { disable: true } },
    endAdornment: { table: { disable: true } },
    getOptionLabel: { table: { disable: true } },
    focused: { table: { disable: true } },
    hiddenLabel: { table: { disable: true } },
    startAdornment: { table: { disable: true } },
    options: {
      description: 'Array of options, expects a array of objects that contain id and value',
    },
    filterSelectedOptions: {
      description: 'If true, hide the selected options from the list box.',
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: true,
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
    multiple: {
      description: 'If true, value must be an array and the menu will support multiple selections.',
      control: { type: 'boolean' },
      table: {
        defaultValue: {
          summary: false,
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
    label: 'Label',
    multiple: false,
    placeholder: 'Search',
    fullWidth: false,
  },
} as Meta;

const Template: Story<SearchProps> = (args) => (
  <ThemeSelector>
    <Search {...args} />
  </ThemeSelector>
);

export const Primary = Template.bind({});
Primary.args = {
  options: options,
  filterSelectedOptions: true,
};

export const MultipleFullwidth = Template.bind({});
MultipleFullwidth.args = {
  options: options,
  multiple: true,
  fullWidth: true,
};

export const LargeMultiple = Template.bind({});
LargeMultiple.args = {
  margin: 'normal',
  options: options,
  multiple: true,
};

export const NoOptions = Template.bind({});
