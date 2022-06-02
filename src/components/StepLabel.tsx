import { StepLabel as MuiStepLabel, StepLabelProps as MuiStepLabelProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type StepLabelProps = MuiStepLabelProps;

const StepLabel = (props: StepLabelProps, ref: Ref<unknown>): JSX.Element => {
  return <MuiStepLabel ref={ref} {...props} />;
};

export default forwardRef(StepLabel);
