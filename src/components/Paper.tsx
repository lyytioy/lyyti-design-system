import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type PaperProps = MuiPaperProps;

const Paper = (props: PaperProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <MuiPaper {...props} ref={ref} />;
};

export default forwardRef(Paper);
