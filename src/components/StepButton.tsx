import {
  StepButton as MuiStepButton,
  StepButtonProps as MuiStepButtonProps,
} from '@mui/material';

export type StepButtonProps = MuiStepButtonProps;

const StepButton = (props: StepButtonProps): JSX.Element => {
  return <MuiStepButton {...props} />;
};

export default StepButton;
