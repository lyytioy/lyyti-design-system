import { Grid as MuiGrid, GridProps as MuiGridProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type GridProps = MuiGridProps;

const Grid = (props: GridProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <MuiGrid ref={ref} {...props} />;
};
export default forwardRef(Grid);
