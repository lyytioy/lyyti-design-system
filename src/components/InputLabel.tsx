import { InputLabel as MuiInputLabel, InputLabelProps as MuiInputLabelProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface InputLabelProps extends MuiInputLabelProps {}

const InputLabel = (
  { sx = {}, ...props }: InputLabelProps,
  ref: Ref<HTMLLabelElement>
): JSX.Element => {
  return (
    <MuiInputLabel
      ref={ref}
      sx={{ color: 'grey.400', letterSpacing: '0.15px', ...sx }}
      {...props}
    />
  );
};

export default forwardRef(InputLabel);
