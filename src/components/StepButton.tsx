import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps,
} from '@material-ui/core';

export type StepButtonProps = MuiStepButtonProps;

const StepButton = (props: StepButtonProps): JSX.Element => {
  return <MuiStepButton {...props} />;
};

export default StepButton;
