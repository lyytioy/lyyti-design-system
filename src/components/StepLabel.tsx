import { StepLabel as MuiStepLabel, StepLabelProps as MuiStepLabelProps } from '@material-ui/core';

export type StepLabelProps = MuiStepLabelProps;

const StepLabel = (props: StepLabelProps): JSX.Element => {
  return <MuiStepLabel {...props} />;
};

export default StepLabel;
