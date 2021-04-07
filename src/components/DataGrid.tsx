import {
  DataGrid as MuiDataGrid,
  DataGridProps as MuiDataGridProps,
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
}

const DataGrid = (props: DataGridProps): JSX.Element => {
  const classes = useStyles();

  return <MuiDataGrid {...props} className={classes.root} />;
};

export default DataGrid;
