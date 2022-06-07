import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type PopperProps = MuiPopperProps;

const Popper = (props: PopperProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <MuiPopper ref={ref} {...props} />;
};

export default forwardRef(Popper);
