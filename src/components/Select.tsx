import { MenuItem } from '@mui/material';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SelectProps<T = OptionsType> = (
  | AutocompleteProps<T>
  | Omit<TextFieldProps, 'startAdornment' | 'endAdornment' | 'variant'>
) & {
  options: T[];
  adornment?: AutocompleteProps<T>['adornment'];
  multiple?: boolean;
  'data-testid'?: string;
};

const Select = ({
  adornment,
  options,
  multiple = false,
  'data-testid': testid,
  ...props
}: SelectProps): JSX.Element => {
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
        },
      }}
      inputProps={{ 'data-testid': testid }}
    >
      {options.map(({ id, value: label }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
