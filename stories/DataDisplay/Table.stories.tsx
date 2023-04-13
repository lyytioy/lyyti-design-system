import { StoryFn, Meta } from '@storybook/react';
import Table from '../../src/components/Table';
import { modifyExcludedParams } from '../../.storybook/excludedParams';
import { TableBody, TableCell, TableHead, TableRow } from '../../src';

export default {
  title: 'Components/Data Display/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Use this component to present data in a clean and simple way',
      },
    },
    controls: { exclude: modifyExcludedParams(['height', 'color']) },
  },
  argTypes: {
    stickyHeader: {
      description: 'If `true`, header row will stick to the top of container',
      control: { type: 'boolean' },
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      description: 'Controls size of table',
      control: { type: 'radio' },
      options: ['small', 'medium'],
      table: { defaultValue: { summary: 'medium' } },
    },
    height: {
      description: 'Sets height of table container',
      control: { type: 'text' },
      table: { defaultValue: { summary: '100%' } },
    },
    color: {
      description: 'Sets color of the table',
      control: { type: 'text' },
      table: { defaultValue: { summary: 'balticSea.50' } },
    },
  },
  args: {
    stickyHeader: false,
    size: 'medium',
    height: '250px',
    color: 'balticSea.50',
  },
} as Meta;

const rows = [
  {
    id: '0',
    firstname: 'John',
    lastname: 'Brown',
    email: 'john.brown@example.com',
  },
  {
    id: '1',
    firstname: 'Roger',
    lastname: 'Smith',
    email: 'roger.smith@example.com',
  },
  {
    id: '2',
    firstname: 'Alice',
    lastname: 'Tyler',
    email: 'alice.tyler@example.com',
  },
  {
    id: '3',
    firstname: 'Colin',
    lastname: 'Robinson',
    email: 'colin.robinson@example.com',
  },
  {
    id: '4',
    firstname: 'Melisa',
    lastname: 'Taylor',
    email: 'melisa.taylor@example.com',
  },
];

const Template: Story = (args) => (
  <Table {...args}>
    <TableHead>
      <TableRow>
        <TableCell>First name</TableCell>
        <TableCell>Last name</TableCell>
        <TableCell>Email</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.firstname}</TableCell>
          <TableCell>{row.lastname}</TableCell>
          <TableCell>{row.email}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Default = Template.bind({});
