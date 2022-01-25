import { Story, Meta } from '@storybook/react/types-6-0';
import Tabs, { TabsProps } from '../../src/components/Tabs';
import ThemeSelector from '../../src/themes/ThemeSelector';
import Tab from '../../src/components/Tab';

export default {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<TabsProps> = (args) => (
  <ThemeSelector>
    <Tabs {...args} />
  </ThemeSelector>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  indicatorColor: 'primary',
  textColor: 'primary',
  value: 0,
  children: [
    <Tab key={1} label="Active" />,
    <Tab key={2} label="Default" />,
    <Tab key={3} label="Disabled" disabled />,
    <Tab key={4} label="Wrapped text label" wrapped />,
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  indicatorColor: 'secondary',
  textColor: 'secondary',
  value: 1,
  children: [
    <Tab key={1} label="Default" />,
    <Tab key={2} label="Active" />,
    <Tab key={3} label="Disabled" disabled />,
    <Tab key={4} label="Wrapped text label" wrapped />,
  ],
};
