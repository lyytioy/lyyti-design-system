import { useRef } from 'react';
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

export type VariantTypes = 'outlined';

export type TextFieldProps = OutlinedTextFieldProps & { variant: VariantTypes };

const TextField = (props: TextFieldProps): JSX.Element => {
  const muiTextField = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  return (
    <MuiTextField
      {...props}
      onClick={() => muiTextField.current?.focus()}
      inputRef={muiTextField}
      classes={{ root: classes.root }}
    />
  );
};

TextField.defaultProps = {
  margin: 'dense',
  label: 'Label',
  placeholder: 'Placeholder',
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export default TextField;
