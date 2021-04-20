import TextField, { TextFieldProps } from './TextField';

export type SelectProps = TextFieldProps;

const Select = (props: SelectProps): JSX.Element => {
  return <TextField select={true} {...props} />;
};

Select.defaultProps = {
  variant: 'outlined',
  disabled: false,
  error: false,
  InputLabelProps: { shrink: true },
  InputProps: { notched: false },
};

export default Select;
