import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
} from '@mui/material';

export interface LinearProgressProps extends MuiLinearProgressProps {
  color: 'primary' | 'secondary';
  value?: number;
  variant: 'buffer' | 'determinate' | 'indeterminate' | 'query';
  'data-testid'?: string;
}

const LinearProgress = ({
  color = 'primary',
  value,
  variant = 'indeterminate',
  ...props
}: LinearProgressProps): JSX.Element => {
  return (
    <MuiLinearProgress
      color={color}
      value={value}
      variant={variant}
      sx={{ minWidth: '200px', width: '100%' }}
      {...props}
    />
  );
};

export default LinearProgress;
