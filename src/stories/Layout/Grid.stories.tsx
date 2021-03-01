import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Grid, { GridProps } from '../../components/Grid';
import ThemeSelector from '../../themes/ThemeSelector';
import { Rect } from '../DataDisplay/Skeleton.stories';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  argTypes: {
    ref: { table: { disable: true } },
    spacing: {
      control: { type: 'select', options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, undefined] },
    },
  },
} as Meta;

const Template: Story<GridProps> = ({ ...args }) => (
  <ThemeSelector>
    <Grid container justify="center" spacing={args.spacing}>
      {[0, 1, 2].map((value) => (
        <Grid key={value} item {...args}>
          <Rect {...Rect.args} />
        </Grid>
      ))}
    </Grid>
  </ThemeSelector>
);

export const Default = Template.bind({});
Default.args = {
  spacing: 1,
};

export const Column = Template.bind({});
Column.args = {
  spacing: 1,
  direction: 'column',
  justify: 'space-between',
  alignItems: 'center',
};
