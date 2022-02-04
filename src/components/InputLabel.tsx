import { InputLabel as MuiInputLabel, InputLabelProps as MuiInputLabelProps } from '@mui/material';

export type InputLabelProps = MuiInputLabelProps;

const InputLabel = (props: InputLabelProps): JSX.Element => {
  return <MuiInputLabel sx={{ color: 'grey.400', letterSpacing: '0.15px' }} {...props} />;
};

export default InputLabel;
