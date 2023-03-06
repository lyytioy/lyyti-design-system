import { MenuItem } from '@mui/material';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';
import { forwardRef, Ref } from 'react';
import Typography from './Typography';

type CommonProps = {
  options?: AutocompleteProps['options'];
  optionDivider?: boolean;
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
  {
    adornment,
    options = [],
    multiple = false,
    'data-testid': testid,
    optionDivider,
    ...props
  }: SelectProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  if (multiple) {
    return (
      <Autocomplete
        multiple={multiple}
        options={options}
        disableClearable
        data-testid={testid}
        optionDivider={optionDivider}
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
        renderValue: (value) => options.find((o) => Number(o.id) === Number(value))?.value,
      }}
      inputProps={{ 'data-testid': testid }}
      {...(props as SingleSelectProps)}
      ref={ref as Ref<HTMLDivElement>}
    >
      {options.map(({ id, value: label, description, disabled }) => (
        <MenuItem
          key={id}
          value={id}
          disabled={disabled}
          sx={{
            ...(description && {
              flexDirection: 'column',
              alignItems: 'flex-start',
            }),
            ...(optionDivider && {
              '&:not(:last-child)': { borderBottom: '1px solid rgba(0,0,0,.23)' },
            }),
          }}
        >
          {label}
          {description && (
            <Typography variant="caption" color="grey.400">
              {description}
            </Typography>
          )}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default forwardRef(Select);
