import { MenuItem } from '@mui/material';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

type CommonProps = {
  options?: AutocompleteProps['options'];
  adornment?: AutocompleteProps<OptionsType>['adornment'];
  multiple?: boolean;
  'data-testid'?: string;
};

export type MultipleSelectProps = Omit<AutocompleteProps, 'options'> & CommonProps;
export type SingleSelectProps = Omit<
  TextFieldProps,
  'startAdornment' | 'endAdornment' | 'variant'
> &
  CommonProps;

export type SelectProps = MultipleSelectProps | SingleSelectProps;

const Select = ({
  adornment,
  options = [],
  multiple = false,
  'data-testid': testid,
  ...props
}: SelectProps): JSX.Element => {
  if (multiple) {
    return (
      <Autocomplete
        multiple={multiple}
        options={options}
        disableClearable
        data-testid={testid}
        {...(props as MultipleSelectProps)}
      />
    );
  }
  return (
    <TextField
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
      {...(props as SingleSelectProps)}
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
