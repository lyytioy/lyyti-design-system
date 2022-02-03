import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';

export type BoxProps = MuiBoxProps;

const Box = (props: BoxProps): JSX.Element => {
  return <MuiBox {...props} />;
};

export default Box;
