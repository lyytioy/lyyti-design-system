import {
  LinearProgress as MuiLinearProgress,
  LinearProgressProps as MuiLinearProgressProps,
  makeStyles,
} from '@material-ui/core';

//   const useStyles = makeStyles({
//     svg: {
//       transform: 'rotate(90deg)',
//     },
//     indeterminate: {
//       animation: 'circular-rotate 2s ease infinite',
//     },
//     '@keyframes circular-rotate': {
//       '0%': {
//         transform: 'rotate(0deg)',
//       },
//       '100%': {
//         transform: 'rotate(360deg)',
//       },
//     },
//     circleIndeterminate: {
//       animation: `$circular-dash 2s ease-in-out infinite`,
//     },
//     '@keyframes circular-dash': {
//       '0%': {
//         strokeDasharray: '1px, 200px',
//         strokeDashoffset: '0px',
//       },
//       '100%': {
//         strokeDasharray: '100px, 200px',
//         strokeDashoffset: '-125px',
//       },
//     },
//   });

export interface LinearProgressProps extends MuiLinearProgressProps {
  color?: 'primary' | 'secondary';
}

const LinearProgress = ({ color = 'primary', ...props }: LinearProgressProps): JSX.Element => {
  // const classes = useStyles();

  return (
    <MuiLinearProgress
      {...props}
      color={color}
      // classes={{
      //   circleIndeterminate: classes.circleIndeterminate,
      //   indeterminate: classes.indeterminate,
      //   svg: classes.svg,
      // }}
    />
  );
};

export default LinearProgress;
