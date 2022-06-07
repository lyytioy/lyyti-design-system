import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
} from '@mui/material';

export type InputAdornmentProps = MuiInputAdornmentProps;

const InputAdornment = ({ sx = {}, ...props }: InputAdornmentProps): JSX.Element => {
  return <MuiInputAdornment sx={{ color: 'text.primary', ...sx }} {...props} />;
};

export default InputAdornment;
