import { StoryFn, Meta } from '@storybook/react';
import Chip, { ChipProps } from '../../src/components/Chip';
import Avatar from '../../src/components/Avatar';
import { Play, StarFilled } from '../../src/icons';
import { modifyExcludedParams } from '../../.storybook/excludedParams';

export default {
  title: 'Components/Data Display/Chip',
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'Use chips to represent an input, attribute, or action.',
      },
    },
    controls: { exclude: modifyExcludedParams(['color']) },
  },
  argTypes: {
    avatar: { control: false },
    deleteIcon: { control: false },
    icon: { control: false },
  },
  args: { label: 'Label', size: 'medium', variant: 'default' },
} as Meta;

const Template: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  onDelete: undefined,
};

export const SecondaryRemovable = Template.bind({});
SecondaryRemovable.args = {
  color: 'secondary',
  onDelete: () => null,
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  icon: <StarFilled fontSize="small" />,
  onDelete: undefined,
};

export const SecondaryLetterSmall = Template.bind({});
SecondaryLetterSmall.args = {
  color: 'secondary',
  avatar: <Avatar>{'M'}</Avatar>,
  size: 'small',
  onDelete: undefined,
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  color: 'secondary',
  variant: 'outlined',
  avatar: <Avatar alt="Steve" src="/steve-basic.png" />,
  onDelete: undefined,
};

export const SecondaryOutlinedIcon = Template.bind({});
SecondaryOutlinedIcon.args = {
  color: 'secondary',
  variant: 'outlined',
  icon: <Play fontSize="small" />,
  onDelete: undefined,
};

export const White = Template.bind({});
White.args = {
  color: 'white',
  variant: 'outlined',
  icon: <Play fontSize="small" />,
  clickable: true,
};
White.parameters = {
  backgrounds: { default: 'dark' },
};

export const WhiteFilled = Template.bind({});
WhiteFilled.args = {
  color: 'white',
  avatar: <Avatar>{'M'}</Avatar>,
  onDelete: () => null,
};
WhiteFilled.parameters = {
  backgrounds: { default: 'dark' },
};
