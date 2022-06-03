import { Story, Meta } from '@storybook/react/types-6-0';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import { Skeleton } from '../../src';
import Accordion, { AccordionProps } from '../../src/components/Accordion';
import { Stack } from '@mui/material';

export default {
  title: 'Components/Data Display/Accordion',
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: 'Use Accordion to display data group that can be collapsed.',
      },
    },
  },
  argTypes: {
    title: {
      description: 'Text displayed in accordion summary',
      type: 'string',
      defaultValue: 'Accordion heading',
      table: { type: { summary: 'string' } },
    },
    titleProps: {
      description: 'Props applied to the title component',
      table: { type: { summary: 'TypographyProps' }, defaultValue: { summary: '{}' } },
    },
    variant: {
      control: { type: 'radio' },
      description: 'The variant to use.',
      options: ['elevation', 'outlined'],
      table: {
        type: { summary: "'elevation' | 'outlined'" },
        defaultValue: { summary: "'elevation'" },
      },
      defaultValue: 'elevation',
    },
    elevation: {
      control: { type: 'number' },
      table: { type: { summary: 'number' }, defaultValue: { summary: 0 } },
      description:
        'Shadow depth, corresponds to `dp` in the spec. It accepts values between 0 and 24 inclusive.',
    },
    square: {
      description: 'If `true`, rounded corners are disabled',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      defaultValue: false,
    },
    defaultExpanded: {
      description: 'If `true`, accordion expanded by default',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      defaultValue: false,
    },
    expandIcon: {
      description: 'Icon displayed next to the title',
      control: false,
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: '<ChevronDown />' } },
    },
  },
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <div style={{ width: '700px' }}>
    <Accordion {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Stack spacing={2}>
      <Skeleton key={1} height={100} variant="rectangular" />
      <Skeleton key={2} height={100} variant="rectangular" />
      <Skeleton key={3} height={100} variant="rectangular" />
    </Stack>
  ),
};
