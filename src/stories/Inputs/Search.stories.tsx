import { Story, Meta } from '@storybook/react/types-6-0';
import Search, { SearchProps } from '../../components/Search';
import ThemeSelector from '../../themes/ThemeSelector';

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
          'The autocomplete is a normal text input enhanced by a panel of suggested options.',
      },
    },
  },
  argTypes: {
    children: { table: { disable: true } },
    filterSelectedOptions: {
      description: 'If true, hide the selected options from the list box.',
      defaultValue: { summary: 'false' },
    },
    getOptionLabel: {
      description:
        'Used to determine the string value for a given option. It is used to fill the input (and the list box options if renderOption is not provided).',
      defaultValue: { summary: '(x) => x' },
    },
  },
  args: {
    placeholder: 'Search',
    options: options,
    getOptionLabel: (option: { id: number; value: string }) => option.value,
  },
} as Meta;

const Template: Story<SearchProps> = (args) => (
  <ThemeSelector>
    <Search {...args} />
  </ThemeSelector>
);

export const Primary = Template.bind({});
Primary.args = { filterSelectedOptions: true };

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  filterSelectedOptions: true,
};

export const LargeWithLabel = Template.bind({});
LargeWithLabel.args = {
  label: 'Label',
  margin: 'normal',
};
