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
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { color: 'secondary' };

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
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

export const OutlinedDanger = Template.bind({});
OutlinedDanger.args = {
  color: 'danger',
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

export const TextDanger = Template.bind({});
TextDanger.args = {
  color: 'danger',
  variant: 'text',
};

export const Chunky = Template.bind({});
Chunky.args = {
  chunky: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  startIcon: <Bin />,
};

export const ChunkyWithIcon = Template.bind({});
ChunkyWithIcon.args = {
  endIcon: <Bin />,
  chunky: true,
};

export const IconPrimary = Template.bind({});
IconPrimary.args = {
  variant: 'icon',
  children: <Bin />,
};

export const IconSecondary = Template.bind({});
IconSecondary.args = {
  variant: 'icon',
  color: 'secondary',
  children: <Bin />,
};

export const Fab = Template.bind({});
Fab.args = {
  variant: 'fab',
  children: <Bin />,
};
