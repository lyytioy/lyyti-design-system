import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from '@mui/material';

export interface RadioGroupProps extends MuiRadioGroupProps {}

const RadioGroup = (props: RadioGroupProps): JSX.Element => {
  return <MuiRadioGroup {...props} />;
};

export default RadioGroup;
