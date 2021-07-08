import { MenuItem } from '@material-ui/core';
import TextField, { TextFieldProps } from './TextField';
import Multiselect, { MultiselectProps, OptionsType } from './Multiselect';

export type SelectProps<T = OptionsType> = (
  | MultiselectProps<T>
  | Omit<TextFieldProps, 'startAdornment' | 'endAdornment' | 'variant'>
) & {
  options: T[];
  adornment?: MultiselectProps<T>['adornment'];
  multiple?: boolean;
};

const Select = (props: SelectProps): JSX.Element => {
  const { adornment, options, multiple = false } = props;
  if (multiple) {
    return <Multiselect {...(props as MultiselectProps)} />;
  }
  return (
    <TextField
      {...(props as TextFieldProps)}
      select
      startAdornment={adornment}
      SelectProps={{
        MenuProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        },
      }}>
      {options.map(({ id, value: label }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
