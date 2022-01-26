import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColumns as MuiGridColumns,
  GridRowsProp as MuiGridRowsProp,
} from '@mui/x-data-grid';
import { Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      '& .MuiDataGrid-root, .MuiDataGrid-iconSeparator': {
        display: 'none',
      },
      '& .MuiDataGrid-root, .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.grey[50],
      },
    },
  })
);

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
  const classes = useStyles();

  return (
    <MuiDataGrid
      autoHeight={autoHeight}
      checkboxSelection={checkboxSelection}
      disableColumnMenu={disableColumnMenu}
      hideFooter={hideFooter}
      pageSize={pageSize}
      {...props}
      className={classes.root}
    />
  );
};

export default DataGrid;
