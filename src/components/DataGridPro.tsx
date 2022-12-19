import {
    DataGridPro as MuiDataGridPro,
    DataGridProProps as MuiDataGridProProps,
    GridColumns as MuiGridColumns,
    GridRowsProp as MuiGridRowsProp,
    GridSelectionModel as MuiGridSelectionModel,
    GridColumnHeaderParams as MuiGridColumnHeaderParams,
    GridCallbackDetails as MuiGridCallbackDetails,
    GridSortModel as MuiGridSortModel,
  } from '@mui/x-data-grid-pro';
  import { forwardRef, Ref } from 'react';
  
  export { useGridApiRef, useGridApiContext } from '@mui/x-data-grid-pro';
  
  export interface GridColumnHeaderParams extends MuiGridColumnHeaderParams {}
  export interface GridColumns extends MuiGridColumns {}
  export interface GridRowsProp extends MuiGridRowsProp {}
  export interface GridSelectionModel extends MuiGridSelectionModel {}
  export interface GridCallbackDetails extends MuiGridCallbackDetails {}
  export interface GridSortModel extends MuiGridSortModel {}
  
  export interface DataGridProProps extends MuiDataGridProProps {
    columns: GridColumns;
    rows: GridRowsProp;
    autoHeight?: boolean;
    checkboxSelection?: boolean;
    disableColumnMenu?: boolean;
    hideFooter?: boolean;
    pageSize?: number;
  }
  
  const DataGridPro = (
    {
      autoHeight = true,
      checkboxSelection = false,
      disableColumnMenu = false,
      hideFooter = false,
      pageSize = 100,
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
  
  export default forwardRef(DataGridPro);
  