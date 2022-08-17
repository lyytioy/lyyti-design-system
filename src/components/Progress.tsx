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

const parseSize = (size?: number | string) => {
  if (typeof size === 'number') return `${size}px`;
  if (typeof size === 'string') {
    if (!size.length) return undefined;
    const sizeAsNumber = Number(size);
    if (!isNaN(sizeAsNumber)) return `${sizeAsNumber}px`;
  }
  return size;
};

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
  return (
    <>
      {type === 'circular' && (
        <CircularProgress
          ref={ref}
          color={color}
          size={parseSize(size)}
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
          sx={{ height: parseSize(size), ...sx }}
          {...props}
        />
      )}
    </>
  );
};

export default forwardRef(Progress);
