import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link, { LinkProps } from '../components/Link';
import ThemeSelector from "../themes/ThemeSelector";

export default {
  title: 'Components/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => <ThemeSelector><Link {...args} /></ThemeSelector>;

export const ListLink = Template.bind({});
ListLink.args = {
    href: '#',
    children: 'Link example',
    underline: 'hover',
};

export const InlineLink = Template.bind({});
InlineLink.args = {
    href: '#',
    children: 'Link example',
    underline: 'always'
};