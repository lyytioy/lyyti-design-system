import { StoryFn, Meta } from '@storybook/react';
import Grid, { GridProps } from '../../src/components/Grid';
import { Rect } from '../Feedback/Skeleton.stories';

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
  args: {
    spacing: 1,
  },
  argTypes: {
    container: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
      description:
        'If true, the component will have the flex container behavior. You should be wrapping items with a container.',
    },
    spacing: {
      table: { defaultValue: { summary: 0 } },
      description:
        'Defines the space between the type item component. It can only be used on a type container component.',
    },
    item: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
      description:
        'If true, the component will have the flex item behavior. You should be wrapping items with a container.',
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
    direction: {
      description: 'Defines the flex-direction style property. It is applied for all screen sizes.',
      table: { defaultValue: { summary: 'row' } },
    },
    justifyContent: {
      description:
        'Defines the justify-content style property. It is applied for all screen sizes.',
      table: { defaultValue: { summary: 'flex-start' } },
    },
    alignItems: {
      description: "Defines the align-items style property. It's applied for all screen sizes.",
      table: { defaultValue: { summary: 'stretch' } },
      controls: { expanded: true },
    },
    alignContent: {
      description: "Defines the align-content style property. It's applied for all screen sizes.",
      table: { defaultValue: { summary: 'stretch' } },
    },
    wrap: {
      description: "Defines the flex-wrap style property. It's applied for all screen sizes.",
      table: { defaultValue: { summary: 'wrap' } },
    },
    zeroMinWidth: {
      control: { type: 'boolean' },
      table: { defaultValue: { summary: false } },
      description:
        'If true, it sets min-width: 0 on the item. Refer to the limitations section of the documentation to better understand the use case.',
    },
  },
} as Meta;

const Template: StoryFn<GridProps> = ({
  spacing,
  direction,
  justifyContent,
  alignItems,
  ...args
}) => (
  <Grid
    container
    spacing={spacing}
    direction={direction}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {[0, 1, 2].map((value) => (
      <Grid key={value} item {...args}>
        <Rect {...Rect.args} />
      </Grid>
    ))}
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  justifyContent: 'center',
  item: true,
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
};
