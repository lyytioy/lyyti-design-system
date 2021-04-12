import { Story, Meta } from '@storybook/react/types-6-0';
import ThemeSelector from 'themes/ThemeSelector';
import { GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import DataGrid, { DataGridProps } from 'components/DataGrid';

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
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
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
  title: 'Components/Data Display/DataGrid',
  component: DataGrid,
  argTypes: {
    columns: { table: { disable: true } },
    rows: { table: { disable: true } },
    disableColumnResize: { table: { disable: true } },
    disableColumnReorder: { table: { disable: true } },
    disableMultipleColumnsFiltering: { table: { disable: true } },
    disableMultipleColumnsSorting: { table: { disable: true } },
    disableMultipleSelection: { table: { disable: true } },
    pagination: { table: { disable: true } },
    apiRef: { table: { disable: true } },
  },
} as Meta;

const Template: Story<DataGridProps> = (args) => (
  <ThemeSelector>
    <div style={{ height: '400px', width: '700px' }}>
      <DataGrid {...args} />
    </div>
  </ThemeSelector>
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
  pageSize: 5,
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
