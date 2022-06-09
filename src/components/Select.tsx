import { MenuItem } from '@mui/material';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';
import { forwardRef, Ref } from 'react';

type CommonProps = {
  options?: AutocompleteProps['options'];
  adornment?: AutocompleteProps<OptionsType>['adornment'];
  multiple?: boolean;
  'data-testid'?: string;
  ref?: Ref<HTMLDivElement>;
};

export type MultipleSelectProps = Omit<AutocompleteProps, 'options'> & CommonProps;
export type SingleSelectProps = Omit<
  TextFieldProps,
  'startAdornment' | 'endAdornment' | 'variant'
> &
  CommonProps;

export type SelectProps = MultipleSelectProps | SingleSelectProps;

const Select = (
  { adornment, options = [], multiple = false, 'data-testid': testid, ...props }: SelectProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  if (multiple) {
    return (
      <Autocomplete
        multiple={multiple}
        options={options}
        disableClearable
        data-testid={testid}
        {...(props as MultipleSelectProps)}
        ref={ref}
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
      ref={ref as Ref<HTMLDivElement>}
    >
      {options.map(({ id, value: label, disabled }) => (
        <MenuItem key={id} value={id} disabled={disabled}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default forwardRef(Select);
