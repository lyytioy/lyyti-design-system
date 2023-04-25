import { forwardRef, Ref, useRef } from 'react';
import { TextField as MuiTextField, OutlinedInputProps, OutlinedTextFieldProps } from '@mui/material';
import InputAdornment from './InputAdornment';

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

export interface TextInputProps extends OutlinedInputProps {
  helperText?: string;
  'data-testid'?: string;
}

const TextField = (
  {
    endAdornment,
    fullWidth = true,
    size = 'small',
    startAdornment,
    color = 'primary',
    error = false,
    helperText = '',
    sx = {},
    InputLabelProps = {},
    ...props
  }: TextFieldProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  const muiTextField = useRef<HTMLDivElement>(null);
  const overrideColor = color === 'white' ? 'common.white' : undefined;

  return (
    <MuiTextField
      variant="outlined"
      fullWidth={fullWidth}
      size={size}
      error={error}
      helperText={helperText}
      onClick={() => muiTextField.current?.focus()}
      inputRef={muiTextField}
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
      InputLabelProps={{ shrink: true, ...InputLabelProps }}
      sx={{
        '& label': {
          color: overrideColor ?? 'grey.400',
          letterSpacing: '0.15px',
          lineHeight: '26px',
        },
        '& .MuiFormLabel-root.Mui-disabled': {
          color: overrideColor ?? 'grey.400',
        },
        '& .MuiInputLabel-shrink': {
          transform: 'translate(0, 0) scale(1)',
        },
        '& .MuiInputLabel-formControl': {
          position: 'relative',
        },
        '& .MuiInputBase-root.Mui-disabled': {
          backgroundColor: overrideColor ?? 'action.selected',
        },
        '& .MuiFormHelperText-root': {
          letterSpacing: '0.15px',
        },
        '& .MuiFormHelperText-contained': {
          marginLeft: 0,
        },
        '& .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
          {
            borderColor: overrideColor,
          },
        '& .MuiSvgIcon-root, .MuiSelect-icon, .MuiInputBase-input, .MuiInputBase-input::placeholder, .MuiFormLabel-root.Mui-focused':
          {
            color: overrideColor,
          },
        ...sx,
      }}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextField);
