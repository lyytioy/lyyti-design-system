import { Grid as MuiGrid, GridProps as MuiGridProps } from '@material-ui/core';

export type GridProps = MuiGridProps;

const Grid = (props: GridProps): JSX.Element => {
  return <MuiGrid {...props} />;
};

Grid.defaultProps = {
  spacing: 0,
  alignContent: 'stretch',
  alignItems: 'stretch',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  wrap: 'wrap',
  xl: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
};

export default Grid;
