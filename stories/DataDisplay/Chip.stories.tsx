import { Story, Meta } from '@storybook/react/types-6-0';
import Chip, { ChipProps } from '../../src/components/Chip';
import Avatar from '../../src/components/Avatar';
import { StarFilled } from '../../src/icons';
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

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

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
