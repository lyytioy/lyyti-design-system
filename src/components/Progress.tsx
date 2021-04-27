import CircularProgress from './CircularProgress';
import LinearProgress, { LinearProgressProps } from './LinearProgress';

export interface ProgressProps extends LinearProgressProps {
  color: 'primary' | 'secondary';
  size?: number | string;
  type: 'circular' | 'linear';
  value?: number;
  variant: 'determinate' | 'indeterminate';
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
        <CircularProgress {...props} color={color} size={size} value={value} variant={variant} />
      )}
      {type === 'linear' && (
        <LinearProgress {...props} color={color} value={value} variant={variant} />
      )}
    </>
  );
};

export default Progress;
