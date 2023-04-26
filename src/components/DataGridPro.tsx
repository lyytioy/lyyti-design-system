import {
    DataGridPro as MuiDataGridPro,
    DataGridProProps as MuiDataGridProProps,
    GridColDef as MuiGridColDef,
    GridRowsProp as MuiGridRowsProp,
    GridRowSelectionModel as MuiGridSelectionModel,
    GridColumnHeaderParams as MuiGridColumnHeaderParams,
    GridCallbackDetails as MuiGridCallbackDetails,
    GridSortModel as MuiGridSortModel,
    GridPaginationModel as MuiGridPaginationModel,
  } from '@mui/x-data-grid-pro';
  import { forwardRef, Ref } from 'react';
  
  export { useGridApiRef, useGridApiContext } from '@mui/x-data-grid-pro';
  
  export interface GridColumnHeaderParams extends MuiGridColumnHeaderParams {}
  export interface GridRowsProp extends MuiGridRowsProp {}
  export interface GridSelectionModel extends MuiGridSelectionModel {}
  export interface GridCallbackDetails extends MuiGridCallbackDetails {}
  export interface GridSortModel extends MuiGridSortModel {}
  export interface GridPaginationModel extends MuiGridPaginationModel {}
  
  export interface DataGridProProps extends MuiDataGridProProps {
    columns: MuiGridColDef[];
    rows: GridRowsProp;
    autoHeight?: boolean;
    checkboxSelection?: boolean;
    disableColumnMenu?: boolean;
    hideFooter?: boolean;
    page?: number;
    pageSize?: number;
    onPaginationModelChange?: (model: GridPaginationModel, details: GridCallbackDetails) => void
  }
  
  const DataGridPro = (
    {
      autoHeight = true,
      checkboxSelection = false,
      disableColumnMenu = false,
      hideFooter = false,
      paginationModel = {page: 0, pageSize: 100},
      sx = {},
      ...props
    }: DataGridProProps,
    ref: Ref<HTMLDivElement>
  ): JSX.Element => {
    return (
      <MuiDataGridPro
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
  
  export default forwardRef(DataGridPro);
  