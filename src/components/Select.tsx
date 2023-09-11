import { MenuItem } from '@mui/material';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';
import { forwardRef, Ref } from 'react';
import Typography from './Typography';
import Checkbox from './Checkbox';

type CommonProps = {
  options?: AutocompleteProps['options'];
  optionDivider?: boolean;
  adornment?: AutocompleteProps<OptionsType>['adornment'];
  multiple?: boolean;
  checkbox?: boolean;
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
    checkbox,
    ...props
  }: SelectProps,
  ref: Ref<HTMLDivElement>
): React.JSX.Element => {
  if (multiple) {
    return (
      <Autocomplete
        multiple={multiple}
        checkbox={checkbox}
        options={options}
        disableClearable
        data-testid={testid}
        optionDivider={optionDivider}
        {...(props as MultipleSelectProps)}
        ref={ref}
      />
    );
  }

  const selectProps = 'SelectProps' in props ? props.SelectProps : {};
  const isMultiple = 'SelectProps' in props && props.SelectProps?.multiple;

  return (
    <TextField
      select
      startAdornment={adornment}
      inputProps={{ 'data-testid': testid }}
      ref={ref}
      {...(props as SingleSelectProps)}
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
          ...selectProps?.MenuProps,
        },
        renderValue: (value) => {
          if (value instanceof Array) return value.map((v) => options.find((o) => o.id == v)?.value).join(', ');

          return  options.find((o) => o.id == value)?.value;
        },
        ...selectProps,
      }}
    >
      {options.map(({ id, value: label, description, disabled }) => {
        const isChecked = isMultiple && (props.value as Array<string | number>).map((i) => i.toString()).indexOf(id.toString()) > -1;

        return (
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
            {checkbox && (<Checkbox checked={isChecked} />)}
            {label}
            {description && (
              <Typography variant="caption" color="grey.400">
                {description}
              </Typography>
            )}
          </MenuItem>
      )})}
    </TextField>
  );
};

export default forwardRef(Select);
