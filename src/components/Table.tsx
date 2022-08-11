import { Table as MuiTable, TableContainer } from '@mui/material';
import { TableProps as MuiTableProps } from '@mui/material/Table/Table';
import { forwardRef, Ref } from 'react';
import { TableContainerProps } from '@mui/material/TableContainer';

export interface TableProps extends MuiTableProps {
  ref?: Ref<HTMLTableElement>;
  height?: string;
  color?: string;
  containerProps?: TableContainerProps;
}

const Table = (
  {
    children,
    size,
    sx,
    containerProps,
    height = '100%',
    color = 'balticSea.50',
    ...props
  }: TableProps,
  ref: Ref<HTMLTableElement>
) => {
  return (
    <TableContainer {...containerProps} sx={{ height, ...containerProps?.sx }}>
      <MuiTable
        ref={ref}
        {...props}
        sx={{
          '.MuiTableCell-root': {
            border: 'none',
            padding: size === 'small' ? '6px' : '14px',
          },

          '.MuiTableBody-root': {
            '.MuiTableRow-root': {
              '&:nth-of-type(even)': { backgroundColor: 'light.light' },
              '&:nth-of-type(odd)': { backgroundColor: color },
            },
          },
          ...sx,
        }}
      >
        {children}
      </MuiTable>
    </TableContainer>
  );
};
export default forwardRef(Table);
