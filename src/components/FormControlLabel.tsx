import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

export type FormControlLabelProps = MuiFormControlLabelProps;

const FormControlLabel = (
  { sx = {}, ...props }: FormControlLabelProps,
  ref: Ref<unknown>
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
