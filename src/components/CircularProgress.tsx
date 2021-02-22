import React, { FunctionComponent } from 'react';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {},
    svg: {
      transform: 'rotate(90deg)',
    },
    indeterminate: {
      animation: 'circular-rotate 2s ease infinite',
    },
    '@-webkit-keyframes circular-rotate': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    '@keyframes circular-rotate': {
      '0%': {
        transform: 'rotate(0deg)',
      },
      '100%': {
        transform: 'rotate(360deg)',
      },
    },
    circleIndeterminate: {
      animation: `$circular-dash 2s ease-in-out infinite`,
    },
    '@-webkit-keyframes circular-dash': {
      '0%': {
        strokeDasharray: '1px, 200px',
        strokeDashoffset: '0px',
      },
      '100%': {
        strokeDasharray: '100px, 200px',
        strokeDashoffset: '-125px',
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
  })
);

export type CircularProgressProps = MuiCircularProgressProps;

const CircularProgress: FunctionComponent<CircularProgressProps> = (props) => {
  const classes = useStyles();

  return (
    <MuiCircularProgress
      {...props}
      classes={{
        circleIndeterminate: classes.circleIndeterminate,
        indeterminate: classes.indeterminate,
        root: classes.root,
        svg: classes.svg,
      }}
    />
  );
};

export default CircularProgress;
