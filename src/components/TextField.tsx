import { useRef } from 'react';
import { TextField as MuiTextField, OutlinedTextFieldProps, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import InputAdornment from './InputAdornment';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: (props: Record<string, unknown>) => {
      const overrideColor = props.color === 'white' ? theme.palette.common.white : undefined;

      return {
        '&:hover': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: overrideColor,
          },
        },
        '& label': {
          color: overrideColor ?? theme.palette.grey[400],
          letterSpacing: '0.15px',
          lineHeight: '26px',
        },
        '& .MuiFormLabel-root.Mui-focused': {
          color: overrideColor,
        },
        '& .MuiFormLabel-root.Mui-disabled': {
          color: overrideColor ?? theme.palette.grey[400],
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(0, 0) scale(1)',
        },
        '& .MuiInputLabel-formControl': {
          position: 'relative',
        },
        '& .MuiInputBase-root.Mui-disabled': {
          backgroundColor: overrideColor ?? theme.palette.action.selected,
        },
        '& .MuiFormHelperText-root': {
          letterSpacing: '0.15px',
        },
        '& .MuiFormHelperText-contained': {
          marginLeft: 0,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: overrideColor,
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: overrideColor,
        },
        '& .MuiInputBase-input::placeholder': {
          color: overrideColor,
        },
        '& .MuiInputBase-input': {
          color: overrideColor,
        },
        '& .MuiSelect-icon': {
          color: overrideColor,
        },
        '& .MuiSvgIcon-root': {
          color: overrideColor,
        },
      };
    },
  })
);

export type SizeTypes = 'small' | 'medium';

export type ColorTypes = 'primary' | 'white';

export type TextFieldProps = {
  endAdornment?: string | JSX.Element;
  fullWidth?: boolean;
  size?: SizeTypes;
  startAdornment?: string | JSX.Element;
  color?: ColorTypes;
  error?: boolean;
  helperText?: string;
  'data-testid'?: string;
} & Omit<
  OutlinedTextFieldProps,
  'variant' | 'color' | 'fullWidth' | 'error' | 'helperText' | 'hiddenLabel'
>;

const TextField = ({
  endAdornment,
  fullWidth = true,
  size = 'small',
  startAdornment,
  color = 'primary',
  error = false,
  helperText = '',
  ...props
}: TextFieldProps): JSX.Element => {
  const muiTextField = useRef<HTMLInputElement>(null);
  const classes = useStyles({ color });

  return (
    <MuiTextField
      fullWidth={fullWidth}
      size={size}
      error={error}
      helperText={helperText}
      onClick={() => muiTextField.current?.focus()}
      inputRef={muiTextField}
      {...props}
      InputProps={{
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : undefined,
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
        ...(props.InputProps ?? {}),
        notched: false,
      }}
      InputLabelProps={{ shrink: true }}
      classes={{ root: classes.root }}
    />
  );
};

export default TextField;
