import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Chip, { ChipProps } from '../components/Chip';
import ThemeSelector from "../themes/ThemeSelector";
import Avatar from '../components/Avatar';
import RatingStarIcon from '../components/icons/Streamline-Essential-Bold/SVG/22-Social-Medias-Rewards-Rating/06-Rating/RatingStar1';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const Template: Story<ChipProps> = (args) => <ThemeSelector><Chip {...args} /></ThemeSelector>;

export const Default = Template.bind({});
Default.args = {
    label: 'Label',
    onDelete: undefined
};

export const DefaultRemovable = Template.bind({});
DefaultRemovable.args = {
    label: 'Medium',
};

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
    label: 'Medium',
    color: 'primary',
    icon: <RatingStarIcon />
};

export const SecondaryLetter = Template.bind({});
SecondaryLetter.args = {
    label: 'Medium',
    color: 'secondary',
    avatar: <Avatar>M</Avatar>
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
    label: 'Medium',
    color: 'secondary',
    variant: 'outlined',
    avatar: <Avatar alt="Steve" src="/steve-basic.png"/>
};

