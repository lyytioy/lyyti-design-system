import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';
export interface CircularProgressProps extends MuiCircularProgressProps {
  color: 'primary' | 'secondary';
  size?: number | string;
  value?: number;
  variant: 'determinate' | 'indeterminate';
  'data-testid'?: string;
}

const CircularProgress = ({
  color = 'primary',
  size = 40,
  value,
  variant = 'indeterminate',
  ...props
}: CircularProgressProps): JSX.Element => {
  return (
    <MuiCircularProgress
      color={color}
      size={size}
      value={value}
      variant={variant}
      sx={{
        '& svg': {
          transform: 'rotate(90deg)',
        },
        '&.indeterminate': {
          animation: `$circular-rotate 2s linear infinite`,
        },
        '& .circleIndeterminate': {
          animation: `$circular-dash 2s linear infinite`,
        },
        '@keyframes circular-rotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        '@keyframes circular-dash': {
          '0%': {
            strokeDasharray: '1px, 200px',
            strokeDashoffset: '0px',
          },
          '100%': {
            strokeDasharray: '100px, 200px',
            strokeDashoffset: '-125px',
          },
        },
      }}
      {...props}
    />
  );
};

export default CircularProgress;
