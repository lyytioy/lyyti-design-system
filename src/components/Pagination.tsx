import React, { FunctionComponent } from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core';
import {Pagination as MuiPagination, PaginationProps as MuiPaginationProps} from '@material-ui/lab';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
      '& .MuiPaginationItem-root': {
          fontSize: '15px'
      }
  },
}))

export interface PaginationProps extends MuiPaginationProps {}

const Pagination: FunctionComponent<PaginationProps> = props => {
    const classes = useStyles();

    return (
        <MuiPagination {...props} classes={{ root: classes.root }} />
    )
};

export default Pagination;
