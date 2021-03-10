import { FunctionComponent } from 'react';
import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps,
} from '@material-ui/core';

export type StepButtonProps = MuiStepButtonProps;

const StepButton: FunctionComponent<StepButtonProps> = (props) => {
  return <MuiStepButton {...props} />;
};

export default StepButton;
