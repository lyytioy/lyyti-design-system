import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Chip, { ChipProps } from '../../components/Chip';
import ThemeSelector from '../../themes/ThemeSelector';
import Avatar from '../../components/Avatar';
import RatingStarIcon from '../../components/icons/Streamline-Essential-Bold/SVG/22-Social-Medias-Rewards-Rating/06-Rating/RatingStar1';

export default {
  title: 'Components/Data Display/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = (args) => (
  <ThemeSelector>
    <Chip {...args} />
  </ThemeSelector>
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
  onDelete: undefined,
};

export const SecondaryRemovable = Template.bind({});
SecondaryRemovable.args = {
  label: 'Label',
  color: 'secondary',
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  label: 'Label',
  icon: <RatingStarIcon />,
};

export const SecondaryLetterSmall = Template.bind({});
SecondaryLetterSmall.args = {
  label: 'Label',
  color: 'secondary',
  avatar: <Avatar>{'M'}</Avatar>,
  size: 'small',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
  label: 'Label',
  color: 'secondary',
  variant: 'outlined',
  avatar: <Avatar alt="Steve" src="/steve-basic.png" />,
};
