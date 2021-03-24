import { Grow as MuiGrow, GrowProps as MuiGrowProps } from '@material-ui/core';

export type GrowProps = MuiGrowProps;

const Grow = (props: GrowProps): JSX.Element => {
  return <MuiGrow {...props} />;
};

export default Grow;
