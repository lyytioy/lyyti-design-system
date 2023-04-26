import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef,
  GridRowsProp as MuiGridRowsProp,
  GridRowSelectionModel as MuiGridSelectionModel,
  GridColumnHeaderParams as MuiGridColumnHeaderParams,
  GridCallbackDetails as MuiGridCallbackDetails,
  GridSortModel as MuiGridSortModel,
  GridPaginationModel as MuiGridPaginationModel,
  GridRenderCellParams as MuiGridRenderCellParams
} from '@mui/x-data-grid';
import { forwardRef, Ref } from 'react';

export { type GridColDef, useGridApiRef, useGridApiContext, useGridSelector, gridPageCountSelector } from '@mui/x-data-grid';

export interface GridColumnHeaderParams extends MuiGridColumnHeaderParams {}
export interface GridRowsProp extends MuiGridRowsProp {}
export interface GridSelectionModel extends MuiGridSelectionModel {}
export interface GridCallbackDetails extends MuiGridCallbackDetails {}
export interface GridSortModel extends MuiGridSortModel {}
export interface GridPaginationModel extends MuiGridPaginationModel {}
export interface GridRenderCellParams extends MuiGridRenderCellParams {}
export interface DataGridProps extends MuiDataGridProps {
  columns: GridColDef[];
  rows: GridRowsProp;
  autoHeight?: boolean;
  checkboxSelection?: boolean;
  disableColumnMenu?: boolean;
  hideFooter?: boolean;
  page?: number;
  pageSize?: number;
  onPaginationModelChange?: (model: GridPaginationModel, details: GridCallbackDetails) => void
  
}

const DataGrid = (
  {
    autoHeight = true,
    checkboxSelection = false,
    disableColumnMenu = false,
    hideFooter = false,
    sx = {},
    page = 1,
    pageSize = 100,
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
      paginationModel={{page: page -1, pageSize}}
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
