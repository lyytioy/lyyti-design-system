import CircularProgress from './CircularProgress';
import LinearProgress from './LinearProgress';

export interface ProgressProps {
  color: 'primary' | 'secondary';
  type: 'circular' | 'linear';
}

const Progress = ({
  color = 'primary',
  type = 'circular',
  ...props
}: ProgressProps): JSX.Element => {
  return (
    <>
      {type === 'circular' && <CircularProgress {...props} color={color} />}
      {type === 'linear' && <LinearProgress {...props} color={color} />}
    </>
  );
};

export default Progress;
