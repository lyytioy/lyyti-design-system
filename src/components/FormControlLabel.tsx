import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface FormControlLabelProps extends MuiFormControlLabelProps {
  ref?: Ref<HTMLLabelElement>;
}

const FormControlLabel = (
  { sx = {}, ...props }: FormControlLabelProps,
  ref: Ref<HTMLLabelElement>
): JSX.Element => {
  return (
    <MuiFormControlLabel
      ref={ref}
      sx={{
        color: 'grey.400',
        letterSpacing: '0.15px',
        label: {
          '&.Mui-disabled': {
            color: '#B8BCBF',
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(FormControlLabel);
