import { Story, Meta } from '@storybook/react/types-6-0';
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid-pro';
import DataGridPro, { DataGridProProps } from '../../src/components/DataGridPro';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default {
  title: 'Components/Data Display/DataGridPro',
  component: DataGridPro,
  parameters: {
    docs: {
      description: {
        component: 'Use data tables to display information in a way that’s easy to scan. Requires mui x pro license key to be set in the client https://mui.com/x/introduction/licensing/#license-key-installation',
      },
    },
  },
  argTypes: {
    columns: {
      table: { defaultValue: { summary: undefined } },
    },
    rows: { table: { defaultValue: { summary: undefined } } },
    disableColumnResize: { table: { disable: true } },
    disableColumnReorder: { table: { disable: true } },
    disableMultipleColumnsFiltering: { table: { disable: true } },
    disableMultipleColumnsSorting: { table: { disable: true } },
    disableMultipleSelection: { table: { disable: true } },
    onRowsScrollEnd: { table: { disable: true } },
    pagination: { table: { disable: true } },
    apiRef: { table: { disable: true } },
  },
  args: {
    rows: rows,
    columns: columns,
  },
} as Meta;

const Template: Story<DataGridProProps> = (args) => (
  <div style={{ height: '400px', width: '700px' }}>
    <DataGridPro {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  rows: rows,
  columns: columns,
};

export const PageSize = Template.bind({});
PageSize.args = {
  rows: rows,
  columns: columns,
  pageSize: 25,
};

export const CheckboxSelection = Template.bind({});
CheckboxSelection.args = {
  rows: rows,
  columns: columns,
  checkboxSelection: true,
};

export const Simplified = Template.bind({});
Simplified.args = {
  rows: rows,
  columns: columns,
  disableColumnMenu: true,
  hideFooter: true,
};
