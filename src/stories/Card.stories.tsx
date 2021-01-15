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
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<CardProps> = (args) => <ThemeSelector><Card {...args} /></ThemeSelector>;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  elevation: 1,
  children: [
    <CardHeader title="Lyyti Oy" subheader="September 26, 2020" ></CardHeader>,
    <CardContent></CardContent>,
    <CardActions>
      <PrimaryOutlinedButton {...PrimaryOutlinedButton.args}>Cancel</PrimaryOutlinedButton>
      <PrimaryContainedButton {...PrimaryContainedButton.args}>Save</PrimaryContainedButton>
    </CardActions>
    ]
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
  variant: 'outlined',
  children: [
    <CardHeader title="Lyyti Oy" subheader="September 26, 2020" ></CardHeader>,
    <CardContent></CardContent>,
    <CardActions>
      <PrimaryOutlinedButton {...PrimaryOutlinedButton.args}>Cancel</PrimaryOutlinedButton>
      <PrimaryContainedButton {...PrimaryContainedButton.args}>Save</PrimaryContainedButton>
    </CardActions>
    ]
};