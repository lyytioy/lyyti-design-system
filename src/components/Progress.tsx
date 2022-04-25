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

const Progress = ({
  color = 'primary',
  size = 40,
  type = 'circular',
  value,
  variant = 'indeterminate',
  ...props
}: ProgressProps): JSX.Element => {
  return (
    <>
      {type === 'circular' && (
        <CircularProgress color={color} size={size} value={value} variant={variant} {...props} />
      )}
      {type === 'linear' && (
        <LinearProgress color={color} value={value} variant={variant} {...props} />
      )}
    </>
  );
};

export default Progress;
