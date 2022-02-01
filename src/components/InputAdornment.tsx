import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
} from '@mui/material';

export type InputAdornmentProps = MuiInputAdornmentProps;

const InputAdornment = (props: InputAdornmentProps): JSX.Element => {
  return <MuiInputAdornment sx={{ color: 'text.primary' }} {...props} />;
};

export default InputAdornment;
