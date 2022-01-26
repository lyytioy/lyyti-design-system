import { Meta, Story } from '@storybook/react/types-6-0';
import DropdownMenu, { DropdownProps } from '../../src/components/DropdownMenu';

export default {
  title: 'Components/Navigation/Menu',
  component: DropdownMenu,
} as Meta;

const exampleFunction = (clickedItem: number) => {
  console.log(clickedItem);
};

const menuItems = [
  { id: 1, title: 'Menu item 1' },
  { id: 2, title: 'Menu item 2' },
  { id: 3, title: 'Menu item 3' },
];

const Template: Story<DropdownProps> = (args) => <DropdownMenu {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
  title: 'Open menu',
  onSelect: (item: number) => exampleFunction(item),
  items: menuItems,
  buttonProps: { children: '', variant: 'outlined', color: 'primary', chunky: false },
};
