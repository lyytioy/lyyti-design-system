import { Story, Meta } from '@storybook/react/types-6-0';
import { Skeleton, Typography } from '../../src';
import Accordion, { AccordionProps } from '../../src/components/Accordion';
import { Stack } from '@mui/material';
import { useState, SyntheticEvent } from 'react';

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
      defaultValue: 0,
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
      description: 'Icon displayed in the accordion summary section',
      control: false,
      table: { type: { summary: 'ReactNode' }, defaultValue: { summary: '<ChevronDown />' } },
    },
    expandIconInline: {
      description: 'If `true`, the icon is displayed right next to the title',
      control: { type: 'boolean'},
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      defaultValue: false
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

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  title: 'Outlined accordion',
  children: (
    <Stack spacing={2}>
      <Skeleton key={1} height={100} variant="rectangular" />
      <Skeleton key={2} height={100} variant="rectangular" />
      <Skeleton key={3} height={100} variant="rectangular" />
    </Stack>
  ),
};

type PanelId = 'First' | 'Second' | 'Third';
const accordionPanels: PanelId[] = ['First', 'Second', 'Third']; 

export const Multiple = () => (
  <div style={{ width: '700px' }}>
    {accordionPanels.map((a) => (
      <Accordion key={a} title={`${a} accordion`}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus impedit
          recusandae voluptate accusamus eaque, dicta aliquid aspernatur quo minima officiis hic
          alias, sunt itaque totam error pariatur est architecto!
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus impedit
          recusandae voluptate accusamus eaque, dicta aliquid aspernatur quo minima officiis hic
          alias, sunt itaque totam error pariatur est architecto!
        </Typography>
      </Accordion>
    ))}
  </div>
);

export const Controlled = () => {
  const [expanded, setExpanded] = useState<PanelId | null>(null);
  const handleChange = (panel: PanelId) => (_event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div style={{ width: '700px' }}>
      {accordionPanels.map((a) => (
        <Accordion
          key={a}
          title={`${a} controlled accordion`}
          expanded={expanded === a}
          onChange={handleChange(a)}
        >
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus impedit
            recusandae voluptate accusamus eaque, dicta aliquid aspernatur quo minima officiis hic
            alias, sunt itaque totam error pariatur est architecto!
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio necessitatibus impedit
            recusandae voluptate accusamus eaque, dicta aliquid aspernatur quo minima officiis hic
            alias, sunt itaque totam error pariatur est architecto!
          </Typography>
        </Accordion>
      ))}
    </div>
  );
};
