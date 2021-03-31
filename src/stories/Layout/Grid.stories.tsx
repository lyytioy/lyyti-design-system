import { Story, Meta } from '@storybook/react/types-6-0';
import Grid, { GridProps } from 'components/Grid';
import ThemeSelector from 'themes/ThemeSelector';
import { Rect } from '../DataDisplay/Skeleton.stories';

export default {
  title: 'Components/Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          'Grids are a great framework to help us put together a clean, well-aligned interface; one that helps our users interact with Lyyti with ease.',
      },
    },
  },
  argTypes: {
    ref: { table: { disable: true } },
    spacing: {
      control: { type: 'number', options: { min: 0, max: 10 } },
      table: {
        defaultValue: { summary: 0 },
      },
      description:
        'Defines the space between the type item component. It can only be used on a type container component.',
    },
    xs: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
      table: { defaultValue: { summary: false } },
      description:
        "Defines the number of grids the component is going to use. It's applied for the xs breakpoint and wider screens if not overridden.",
    },
    sm: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
      table: { defaultValue: { summary: false } },
    },
    md: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
      table: { defaultValue: { summary: false } },
    },
    lg: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
      table: { defaultValue: { summary: false } },
    },
    xl: {
      control: {
        type: 'number',
        min: 1,
        max: 12,
      },
      table: { defaultValue: { summary: false } },
    },
    justify: {
      description:
        'Defines the justify-content style property. It is applied for all screen sizes.',
    },
  },
} as Meta;

// eslint-disable-next-line react/prop-types
const Template: Story<GridProps> = ({ spacing, direction, justify, alignItems, ...args }) => (
  <ThemeSelector>
    <Grid
      container
      spacing={spacing}
      direction={direction}
      justify={justify}
      alignItems={alignItems}>
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
  justify: 'center',
};

export const Column = Template.bind({});
Column.args = {
  spacing: 1,
  direction: 'column',
  justify: 'space-between',
  alignItems: 'center',
};
