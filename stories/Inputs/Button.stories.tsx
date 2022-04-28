import { Story, Meta } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../../src/components/Button';
import { Bin } from '../../src/icons';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'danger', 'inherit'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    children: 'Button',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger'
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  color: 'primary',
  variant: 'outlined',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  variant: 'outlined',
};

export const OutlinedDanger = Template.bind({});
OutlinedDanger.args = {
  color: 'danger',
  variant: 'outlined',
};

export const TextPrimary = Template.bind({});
TextPrimary.args = {
  color: 'primary',
  variant: 'text',
};

export const TextSecondary = Template.bind({});
TextSecondary.args = {
  variant: 'text',
};

export const TextDanger = Template.bind({});
TextDanger.args = {
  color: 'danger',
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
