import {
  Autocomplete as MuiAutocomplete,
  ChipTypeMap,
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material';
import TextField, { SizeTypes, ColorTypes } from './TextField';
import InputAdornment from './InputAdornment';
import Chip from './Chip';
import { forwardRef, Ref } from 'react';

declare module '@mui/material' {
  interface AutocompleteProps<
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent']
  > {
    getOptionLabel?: (option: OptionsType) => string;
  }
}

export type OptionsType = {
  id: number | string;
  value: string;
  disabled?: boolean;
};

export interface AutocompleteProps<T = OptionsType>
  extends Omit<
    MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
    'hiddenLabel' | 'startAdornment' | 'endAdornment' | 'variant' | 'renderInput' | 'ref'
  > {
  adornment?: string | JSX.Element;
  label?: string;
  size?: SizeTypes;
  multiple?: boolean;
  placeholder?: string;
  color?: ColorTypes;
  error?: boolean;
  helperText?: string;
  'data-testid'?: string;
  ref?: Ref<HTMLDivElement>;
}

const Autocomplete = (
  {
    adornment,
    getOptionLabel = (option: OptionsType) => option.value,
    label,
    size = 'medium',
    freeSolo = false,
    options,
    multiple = false,
    placeholder,
    color = 'primary',
    disabled = false,
    error,
    helperText,
    'data-testid': testid,
    sx = {},
    ...props
  }: AutocompleteProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiAutocomplete
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      options={options}
      multiple={multiple}
      freeSolo={freeSolo}
      ref={ref}
      sx={{
        option: {
          '&.Mui-selected': {
            bgcolor: 'primaryState.selected',
          },
          '&:hover': {
            bgcolor: 'primaryStates.hover',
          },
        },
        ...sx,
      }}
      renderTags={(tags: OptionsType[], getTagProps) =>
        tags.map((tag: OptionsType, index: number) => (
          <Chip label={tag.value} size={size} {...getTagProps({ index })} key={index} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          size={size}
          error={error}
          helperText={helperText}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                {adornment && <InputAdornment position="start">{adornment}</InputAdornment>}
                {params.InputProps.startAdornment}
              </>
            ),
          }}
          data-testid={testid}
          color={color}
        />
      )}
      {...props}
    />
  );
};

export default forwardRef(Autocomplete);
