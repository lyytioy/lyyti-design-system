import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColumns as MuiGridColumns,
  GridRowsProp as MuiGridRowsProp,
  GridSelectionModel as MuiGridSelectionModel,
  GridColumnHeaderParams as MuiGridColumnHeaderParams,
} from '@mui/x-data-grid';
import { forwardRef, Ref } from 'react';

export interface GridColumnHeaderParams extends MuiGridColumnHeaderParams {}
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

const DataGrid = (
  {
    autoHeight = true,
    checkboxSelection = false,
    disableColumnMenu = false,
    hideFooter = false,
    pageSize = 100,
    sx = {},
    ...props
  }: DataGridProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiDataGrid
      ref={ref}
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
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(DataGrid);
