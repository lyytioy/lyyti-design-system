import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type RadioProps = MuiRadioProps;

const Radio = ({ sx = {}, ...props }: RadioProps, ref: Ref<HTMLButtonElement>): JSX.Element => {
  return (
    <MuiRadio
      ref={ref}
      sx={{
        color: 'grey.200',
        '&:hover': { bgcolor: 'primaryStates.hover' },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Radio);
