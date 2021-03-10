import { FunctionComponent } from 'react';
import { Grow as MuiGrow, GrowProps as MuiGrowProps } from '@material-ui/core';

export type GrowProps = MuiGrowProps;

const Grow: FunctionComponent<GrowProps> = (props) => {
  return <MuiGrow {...props} />;
};

export default Grow;
