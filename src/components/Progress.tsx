import CircularProgress from './CircularProgress';
import LinearProgress from './LinearProgress';

export interface ProgressProps {
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
