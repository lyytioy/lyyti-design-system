import { Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Pagination as MuiPagination } from '@mui/material';
import { PaginationProps as MuiPaginationProps } from '@mui/material';

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

const Pagination = (props: PaginationProps): JSX.Element => {
  const classes = useStyles();

  return <MuiPagination {...props} classes={{ root: classes.root }} />;
};

export default Pagination;
