import { Story, Meta } from '@storybook/react/types-6-0';
import Multiselect, { MultiselectProps } from '../../components/Multiselect';
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
  component: Multiselect,
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
    },
    getOptionLabel: {
      description:
        'Used to determine the string value for a given option. It is used to fill the input (and the list box options if renderOption is not provided).',
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Search',
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

export const Multiple = Template.bind({});
Multiple.args = {
  options: options,
  multiple: true,
};

export const LargeWithLabel = Template.bind({});
LargeWithLabel.args = {
  margin: 'normal',
};

export const NoOptions = Template.bind({});
