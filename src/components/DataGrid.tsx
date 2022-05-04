import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColumns as MuiGridColumns,
  GridRowsProp as MuiGridRowsProp,
  GridSelectionModel as MuiGridSelectionModel,
} from '@mui/x-data-grid';

export * from '@mui/x-data-grid';
export interface GridColumns extends MuiGridColumns {}
export interface GridRowsProp extends MuiGridRowsProp {}
export interface GridSelectionModel extends MuiGridSelectionModel {}

export interface DataGridProps extends MuiDataGridProps {
  columns: GridColumns;
  rows: GridRowsProp;
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
