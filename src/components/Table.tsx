import { Table as MuiTable } from '@mui/material';
import { TableProps as MuiTableProps } from '@mui/material/Table/Table';
import { forwardRef, Ref } from 'react';

export interface TableProps extends MuiTableProps {
  ref?: Ref<HTMLTableElement>;
}

const Table = ({ children, sx, ...props }: TableProps, ref: Ref<HTMLTableElement>) => {
  return (
    <MuiTable
      ref={ref}
      {...props}
      sx={{
        '.MuiTableCell-root': { border: 'none', padding: '14px' },

        '.MuiTableBody-root': {
          '.MuiTableRow-root': {
            '&:nth-child(even)': { backgroundColor: 'light.light' },
            '&:nth-child(odd)': { backgroundColor: 'balticSea.50' },
          },
        },
        ...sx,
      }}
    >
      {children}
    </MuiTable>
  );
};
export default forwardRef(Table);
