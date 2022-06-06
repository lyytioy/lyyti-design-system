import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface LinearProgressProps extends MuiLinearProgressProps {
  color: 'primary' | 'secondary';
  value?: number;
  variant: 'buffer' | 'determinate' | 'indeterminate' | 'query';
  'data-testid'?: string;
}

const LinearProgress = (
  { color = 'primary', value, variant = 'indeterminate', sx = {}, ...props }: LinearProgressProps,
  ref: Ref<unknown>
): JSX.Element => {
  return (
    <MuiLinearProgress
      ref={ref}
      color={color}
      value={value}
      variant={variant}
      sx={{ minWidth: '200px', width: '100%', ...sx }}
      {...props}
    />
  );
};

export default forwardRef(LinearProgress);
