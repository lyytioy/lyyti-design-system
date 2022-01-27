import { Pagination as MuiPagination } from '@mui/material';
import { PaginationProps as MuiPaginationProps } from '@mui/material';

export type PaginationProps = MuiPaginationProps;

const Pagination = (props: PaginationProps): JSX.Element => {
  return (
    <MuiPagination
      sx={{
        '& .MuiPaginationItem-root': {
          fontSize: '15px',
          lineHeight: '16px',
        },
      }}
      {...props}
    />
  );
};

export default Pagination;
