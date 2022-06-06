import { forwardRef, Ref } from 'react';
import CircularProgress from './CircularProgress';
import LinearProgress, { LinearProgressProps } from './LinearProgress';

export interface ProgressProps extends Omit<LinearProgressProps, 'color' | 'variant'> {
  color?: 'primary' | 'secondary';
  size?: number | string;
  type?: 'circular' | 'linear';
  value?: number;
  variant?: 'determinate' | 'indeterminate';
  'data-testid'?: string;
}

const Progress = (
  {
    color = 'primary',
    size = 40,
    type = 'circular',
    value,
    variant = 'indeterminate',
    ...props
  }: ProgressProps,
  ref: Ref<unknown>
): JSX.Element => {
  return (
    <>
      {type === 'circular' && (
        <CircularProgress
          ref={ref}
          color={color}
          size={size}
          value={value}
          variant={variant}
          {...props}
        />
      )}
      {type === 'linear' && (
        <LinearProgress ref={ref} color={color} value={value} variant={variant} {...props} />
      )}
    </>
  );
};

export default forwardRef(Progress);
