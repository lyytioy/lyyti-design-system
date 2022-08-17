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
  ref?: Ref<HTMLSpanElement>;
}

const Progress = (
  {
    color = 'primary',
    size,
    type = 'circular',
    value,
    variant = 'indeterminate',
    sx = {},
    ...props
  }: ProgressProps,
  ref: Ref<HTMLSpanElement>
): JSX.Element => {
  const parseSize = () => {
    if (typeof size === 'number') return `${size}px`;
    else if (typeof size === 'string') {
      if (!size.length) return undefined;
      else if (!isNaN(+size)) return `${+size}px`;
    }
    return size;
  };

  return (
    <>
      {type === 'circular' && (
        <CircularProgress
          ref={ref}
          color={color}
          size={parseSize()}
          value={value}
          variant={variant}
          sx={sx}
          {...props}
        />
      )}
      {type === 'linear' && (
        <LinearProgress
          ref={ref}
          color={color}
          value={value}
          variant={variant}
          sx={{ height: parseSize(), ...sx }}
          {...props}
        />
      )}
    </>
  );
};

export default forwardRef(Progress);
