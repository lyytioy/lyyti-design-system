import React, { FunctionComponent } from 'react';
import {
  TextField as MuiTextField,
  OutlinedTextFieldProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      minWidth: '220px',
      '& label': {
        color: theme.palette.grey[400],
        letterSpacing: '0.15px',
      },
      '& .MuiFormLabel-root.Mui-disabled': {
        color: theme.palette.grey[400],
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(0, -20px) scale(1)',
      },
      '& .MuiInputBase-root.Mui-disabled': {
        backgroundColor: 'rgba(122, 131, 137, 0.08)',
      },
      '& .MuiFormHelperText-root': {
        letterSpacing: '0.15px',
      },
      '& .MuiFormHelperText-contained': {
        marginLeft: 0,
      },
    },
  })
);

export type TextFieldProps = OutlinedTextFieldProps;

const TextField: FunctionComponent<TextFieldProps> = (props) => {
  const classes = useStyles();

  return <MuiTextField {...props} classes={{ root: classes.root }} />;
};

export default TextField;
