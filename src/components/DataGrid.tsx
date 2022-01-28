import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColumns as MuiGridColumns,
  GridRowsProp as MuiGridRowsProp,
} from '@mui/x-data-grid';

export interface DataGridProps extends MuiDataGridProps {
  columns: MuiGridColumns;
  rows: MuiGridRowsProp;
  autoHeight?: boolean;
  checkboxSelection?: boolean;
  disableColumnMenu?: boolean;
  hideFooter?: boolean;
  pageSize?: number;
}

const DataGrid = ({
  autoHeight = true,
  checkboxSelection = false,
  disableColumnMenu = false,
  hideFooter = false,
  pageSize = 100,
  ...props
}: DataGridProps): JSX.Element => {
  return (
    <MuiDataGrid
      autoHeight={autoHeight}
      checkboxSelection={checkboxSelection}
      disableColumnMenu={disableColumnMenu}
      hideFooter={hideFooter}
      pageSize={pageSize}
      sx={{
        '& .MuiDataGrid-iconSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'grey.50',
        },
      }}
      {...props}
    />
  );
};

export default DataGrid;
