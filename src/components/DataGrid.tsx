import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColDef as MuiGridColumn,
  GridRowsProp as MuiGridRowsProp,
  GridRowSelectionModel as MuiGridSelectionModel,
  GridColumnHeaderParams as MuiGridColumnHeaderParams,
  GridCallbackDetails as MuiGridCallbackDetails,
  GridSortModel as MuiGridSortModel,
  GridPaginationModel,
} from '@mui/x-data-grid';
import { forwardRef, Ref } from 'react';

export { useGridApiRef, useGridApiContext } from '@mui/x-data-grid';

export interface GridColumnHeaderParams extends MuiGridColumnHeaderParams {}
export type GridColumns = MuiGridColumn[]
export interface GridRowsProp extends MuiGridRowsProp {}
export interface GridSelectionModel extends MuiGridSelectionModel {}
export interface GridCallbackDetails extends MuiGridCallbackDetails {}
export interface GridSortModel extends MuiGridSortModel {}

export interface DataGridProps extends MuiDataGridProps {
  columns: GridColumns;
  rows: GridRowsProp;
  autoHeight?: boolean;
  checkboxSelection?: boolean;
  disableColumnMenu?: boolean;
  hideFooter?: boolean;
  paginationModel?: GridPaginationModel
}

const DataGrid = (
  {
    autoHeight = true,
    checkboxSelection = false,
    disableColumnMenu = false,
    hideFooter = false,
    paginationModel = {page: 0, pageSize: 100},
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
      paginationModel={paginationModel}
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
