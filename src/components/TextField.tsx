import { ReactNode, useRef } from 'react';
import {
  TextField as MuiTextField,
  OutlinedTextFieldProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import InputAdornment from './InputAdornment';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      '& label': {
        color: theme.palette.grey[400],
        letterSpacing: '0.15px',
        lineHeight: '26px',
      },
      '& .MuiFormLabel-root.Mui-disabled': {
        color: theme.palette.grey[400],
      },
      '& .MuiInputLabel-shrink': {
        transform: 'translate(0, 0) scale(1)',
      },
      '& .MuiInputLabel-formControl': {
        position: 'relative',
      },
      '& .MuiInputBase-root.Mui-disabled': {
        backgroundColor: theme.palette.action.selected,
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

export interface TextFieldProps extends OutlinedTextFieldProps {
  endAdornment?: ReactNode;
  margin?: 'dense' | 'normal';
  startAdornment?: ReactNode;
  variant: 'outlined';
}

const TextField = ({
  endAdornment,
  margin = 'dense',
  startAdornment,
  variant = 'outlined',
  ...props
}: TextFieldProps): JSX.Element => {
  const muiTextField = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  return (
    <MuiTextField
      margin={margin}
      InputLabelProps={{ shrink: true }}
      InputProps={{
        notched: false,
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : undefined,
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
      }}
      variant={variant}
      onClick={() => muiTextField.current?.focus()}
      inputRef={muiTextField}
      {...props}
      classes={{ root: classes.root }}
    />
  );
};

export default TextField;
