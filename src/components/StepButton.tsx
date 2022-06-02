import { StepButton as MuiStepButton, StepButtonProps as MuiStepButtonProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type StepButtonProps = MuiStepButtonProps;

const StepButton = (props: StepButtonProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
  return <MuiStepButton ref={ref} {...props} />;
};

export default forwardRef(StepButton);
