import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type PaginationProps = MuiPaginationProps;

const Pagination = ({ sx = {}, ...props }: PaginationProps, ref: Ref<unknown>): JSX.Element => {
  return (
    <MuiPagination
      ref={ref}
      sx={{
        '& .MuiPaginationItem-root': {
          fontSize: '15px',
          lineHeight: '16px',
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Pagination);
