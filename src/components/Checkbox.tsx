import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type CheckboxProps = MuiCheckboxProps;

const Checkbox = (
  { sx = {}, ...props }: CheckboxProps,
  ref: Ref<HTMLButtonElement>
): JSX.Element => {
  return (
    <MuiCheckbox
      ref={ref}
      sx={{
        color: 'grey.200',
        '&:hover': {
          bgcolor: 'primaryStates.hover',
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Checkbox);
