import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@material-ui/core';

export interface LinearProgressProps extends MuiLinearProgressProps {
  color: 'primary' | 'secondary';
  value?: number;
  variant: 'buffer' | 'determinate' | 'indeterminate' | 'query';
}

const LinearProgress = ({
  color = 'primary',
  value,
  variant = 'indeterminate',
  ...props
}: LinearProgressProps): JSX.Element => {
  return <MuiLinearProgress {...props} color={color} value={value} variant={variant} />;
};

export default LinearProgress;
