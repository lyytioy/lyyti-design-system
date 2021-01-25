import React, { FunctionComponent } from 'react';
import {
  InputLabel as MuiInputLabel,
  InputLabelProps as MuiInputLabelProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[400],
      letterSpacing: '0.15px',
    },
  })
);

export type InputLabelProps = MuiInputLabelProps;

const InputLabel: FunctionComponent<InputLabelProps> = (props) => {
  const classes = useStyles();

  return <MuiInputLabel {...props} classes={{ root: classes.root }} />;
};

export default InputLabel;
