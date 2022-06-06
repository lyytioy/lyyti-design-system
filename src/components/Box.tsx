import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type BoxProps = MuiBoxProps;

const Box = (props: BoxProps, ref: Ref<unknown>): JSX.Element => {
  return <MuiBox ref={ref} {...props} />;
};

export default forwardRef(Box);
