import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@material-ui/core';

export interface LinearProgressProps extends MuiLinearProgressProps {
  color: 'primary' | 'secondary';
}

const LinearProgress = ({ color = 'primary', ...props }: LinearProgressProps): JSX.Element => {
  return <MuiLinearProgress {...props} color={color} />;
};

export default LinearProgress;
