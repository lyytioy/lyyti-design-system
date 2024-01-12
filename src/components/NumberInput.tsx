import { forwardRef, Ref, useRef } from 'react';
import { Box, TextField as MuiTextField, OutlinedTextFieldProps } from '@mui/material';
import {
    unstable_useNumberInput as useNumberInput,
    UseNumberInputParameters,
  } from '@mui/base/unstable_useNumberInput';
import { ChevronDown, ChevronUp } from '../icons';

// A workaround component to make numbers work with TextField
// Official upcoming MUI component https://github.com/mui/material-ui/issues/19154

// Why not use TextField with type="number"? From MUI docs:
//
// We do not recommend using type="number" with a Text Field due to potential usability issues:
// it allows certain non-numeric characters ('e', '+', '-', '.') and silently discards others
// the functionality of scrolling to increment/decrement the number can cause accidental and hard-to-notice changes
// and more—see Why the GOV.UK Design System team changed the input type for numbers for a more detailed explanation of the limitations of <input type="number">

export type SizeTypes = 'small' | 'medium';

export type ColorTypes = 'primary' | 'white';

export type NumberInputProps = {
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
> & UseNumberInputParameters;

const NumberInput = (
  {
    fullWidth = true,
    size = 'small',
    startAdornment,
    color = 'primary',
    error = false,
    helperText = '',
    sx = {},
    InputLabelProps = {},
    ...props
  }: NumberInputProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  const { getRootProps, getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput(props);
  const muiTextField = useRef<HTMLDivElement>(null);
  const overrideColor = color === 'white' ? 'common.white' : undefined;

  return (
    <MuiTextField
      {...getRootProps()}
      variant="outlined"
      fullWidth={fullWidth}
      size={size}
      error={error}
      helperText={helperText}
      onClick={() => muiTextField.current?.focus()}
      inputRef={muiTextField}
      InputProps={{
        
        ...(props.InputProps ?? {}),
        notched: false,
        ...(getInputProps()),
        endAdornment: (
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Box
              component="button"
              type="button"
              {...getIncrementButtonProps()}
              sx={{
                bgcolor: color === 'white' ? undefined : 'grey.100',
                background: color === 'white' ? 'none' : undefined,
                display: 'flex',
                m: '4px',
                mb: 0,
                p: '1px',
                cursor: 'pointer',
                border: 0,
                '&:hover': {
                  bgcolor: 'grey.200',
                },
              }}>
              <ChevronUp sx={{ fontSize: '12px', bgcolor: null }} />
            </Box>
            <Box
              component="button"
              type="button"
              {...getDecrementButtonProps()}
              sx={{
                bgcolor: color === 'white' ? undefined : 'grey.100',
                background: color === 'white' ? 'none' : undefined,
                display: 'flex',
                m: '4px',
                mt: 0,
                p: '1px',
                cursor: 'pointer',
                border: 0,
                '&:hover': {
                  bgcolor: 'grey.200',
                },
              }}>
              <ChevronDown sx={{ fontSize: '12px', bgcolor: null }} />
            </Box>
          </Box>
        )
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

export default forwardRef(NumberInput);
