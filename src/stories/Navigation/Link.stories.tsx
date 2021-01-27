import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Link, { LinkProps } from '../../components/Link';
import ThemeSelector from '../../themes/ThemeSelector';
import CogIcon from '../../components/icons/Streamline-Essential-Regular/SVG/Stroke version/01-Interface Essential/12-Settings/Cog';

export default {
  title: 'Components/Navigation/Link',
  component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
  <ThemeSelector>
    <Link {...args} />
  </ThemeSelector>
);

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
  underline: 'always',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  href: '#',
  children: [<CogIcon key={1} fontSize="inherit" style={{ marginRight: '8px' }} />, 'Link example'],
  underline: 'always',
};
