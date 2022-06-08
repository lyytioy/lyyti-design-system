import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface PaginationProps extends MuiPaginationProps {
  ref?: Ref<HTMLElement>;
}

const Pagination = ({ sx = {}, ...props }: PaginationProps, ref: Ref<HTMLElement>): JSX.Element => {
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
