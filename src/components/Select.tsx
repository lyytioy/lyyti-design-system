import { MenuItem } from '@material-ui/core';
import TextField, { TextFieldProps } from './TextField';
import Multiselect, { MultiselectProps, OptionsType } from './Multiselect';

export type SelectProps<T = OptionsType> = (MultiselectProps<T> | TextFieldProps) & {
  options: T[];
};

const Select = (props: SelectProps): JSX.Element => {
  const { options } = props;
  if ((props as MultiselectProps).multiple) {
    return <Multiselect {...(props as MultiselectProps)} />;
  }
  return (
    <TextField {...(props as TextFieldProps)} select>
      {options.map(({ id, value: label }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
