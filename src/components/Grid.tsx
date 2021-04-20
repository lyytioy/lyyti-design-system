import { Grid as MuiGrid, GridProps as MuiGridProps } from '@material-ui/core';

export type GridProps = MuiGridProps;

const Grid = (props: GridProps): JSX.Element => {
  return <MuiGrid {...props} />;
};
export default Grid;
