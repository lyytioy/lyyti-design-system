import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Pagination, { PaginationProps } from 'components/Pagination';
import ThemeSelector from 'themes/ThemeSelector';

export default {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary'],
      },
    },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => (
  <ThemeSelector>
    <Pagination {...args} />
  </ThemeSelector>
);

export const Standard = Template.bind({});
Standard.args = {
  count: 10,
};

export const MediumPrimary = Template.bind({});
MediumPrimary.args = {
  count: 10,
  color: 'primary',
};

export const SmallPrimary = Template.bind({});
SmallPrimary.args = {
  count: 10,
  color: 'primary',
  size: 'small',
};
