import { Box as MuiBox, BoxProps as MuiBoxProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface BoxProps extends MuiBoxProps {
  ref?: Ref<HTMLElement>;
}

const Box = (props: BoxProps, ref: Ref<HTMLElement>): JSX.Element => {
  return <MuiBox ref={ref} {...props} />;
};

export default forwardRef(Box);
