import { RadioGroup as MuiRadioGroup, RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface RadioGroupProps extends MuiRadioGroupProps {}

const RadioGroup = (props: RadioGroupProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <MuiRadioGroup ref={ref} {...props} />;
};

export default forwardRef(RadioGroup);
