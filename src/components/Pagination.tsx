import { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {
  Pagination as MuiPagination,
  PaginationProps as MuiPaginationProps,
} from '@material-ui/lab';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      '& .MuiPaginationItem-root': {
        fontSize: '15px',
        lineHeight: '16px',
      },
    },
  })
);

export type PaginationProps = MuiPaginationProps;

const Pagination: FunctionComponent<PaginationProps> = (props) => {
  const classes = useStyles();

  return <MuiPagination {...props} classes={{ root: classes.root }} />;
};

export default Pagination;
