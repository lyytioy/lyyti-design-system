import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../../components/Button';
import ThemeSelector from '../../themes/ThemeSelector';
import { Bin } from '../../icons';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <ThemeSelector>
    <Button {...args} />
  </ThemeSelector>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  color: 'secondary',
  variant: 'outlined',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  variant: 'text',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  color: 'secondary',
  variant: 'text',
};

export const Chunky = Template.bind({});
Chunky.args = {
  chunky: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  startIcon: <Bin fontSize="small" />,
};

export const Icon = Template.bind({});
Icon.args = {
  children: <Bin fontSize="small" />,
};
