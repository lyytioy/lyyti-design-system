import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Card, { CardProps } from '../components/Card';
import ThemeSelector from "../themes/ThemeSelector";
import CardHeader from '../components/CardHeader';
import CardContent from '../components/CardContent';
import CardActions from '../components/CardActions';
import { Primary as PrimaryContainedButton } from './ContainedButton.stories';
import { Primary as PrimaryOutlinedButton } from './OutlinedButton.stories';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <ThemeSelector><Card {...args} /></ThemeSelector>;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
    children: [<CardHeader title="Lyyti Oy" subheader="September 26, 2020" ></CardHeader>, <CardContent></CardContent>, <CardActions><PrimaryOutlinedButton color='primary' variant='outlined' chunky={false}>Cancel</PrimaryOutlinedButton><PrimaryContainedButton color='primary' variant='contained' chunky={false}>Save</PrimaryContainedButton></CardActions>],
    elevation: 1
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
    children: [<CardHeader title="Lyyti Oy" subheader="September 26, 2020" ></CardHeader>, <CardContent></CardContent>, <CardActions><PrimaryOutlinedButton color='primary' variant='outlined' chunky={false}>Cancel</PrimaryOutlinedButton><PrimaryContainedButton color='primary' variant='contained' chunky={false}>Save</PrimaryContainedButton></CardActions>],
    variant: 'outlined',
};