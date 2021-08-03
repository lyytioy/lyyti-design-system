import { MenuItem } from '@material-ui/core';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SelectProps<T = OptionsType> = (
  | AutocompleteProps<T>
  | Omit<TextFieldProps, 'startAdornment' | 'endAdornment' | 'variant'>
) & {
  options: T[];
  adornment?: AutocompleteProps<T>['adornment'];
  multiple?: boolean;
};

const Select = (props: SelectProps): JSX.Element => {
  const { adornment, options, multiple = false } = props;
  if (multiple) {
    return <Autocomplete {...(props as AutocompleteProps)} disableClearable />;
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
