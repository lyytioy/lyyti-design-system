import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
  GridColumns as MuiGridColumns,
  GridRowsProp as MuiGridRowsProp,
} from '@material-ui/data-grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

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
  rows: MuiGridRowsProp;
  columns: MuiGridColumns;
  pageSize: number;
  checkboxSelection: boolean;
}

const DataGrid = ({
  pageSize = 100,
  checkboxSelection = false,
  ...props
}: DataGridProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiDataGrid
      pageSize={pageSize}
      checkboxSelection={checkboxSelection}
      {...props}
      className={classes.root}
    />
  );
};

export default DataGrid;
