import { Autocomplete as MuiAutocomplete, ChipTypeMap } from '@mui/material';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';
import TextField, { SizeTypes, ColorTypes } from './TextField';
import InputAdornment from './InputAdornment';
import Chip from './Chip';

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
    'hiddenLabel' | 'startAdornment' | 'endAdornment' | 'variant' | 'renderInput'
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
}

const Autocomplete = ({
  adornment,
  getOptionLabel = (option: OptionsType) => option.value,
  label,
  size = 'medium',
  options,
  multiple = false,
  placeholder,
  color = 'primary',
  disabled = false,
  error,
  helperText,
  'data-testid': testid,
  ...props
}: AutocompleteProps): JSX.Element => {
  return (
    <MuiAutocomplete
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      options={options}
      multiple={multiple}
      sx={{
        option: {
          '&.Mui-selected': {
            bgcolor: 'primaryState.selected',
          },
          '&:hover': {
            bgcolor: 'primaryStates.hover',
          },
        },
      }}
      renderTags={(value: OptionsType[], getTagProps) =>
        value.map((value: OptionsType, index: number) => (
          <Chip label={value.value} size={size} {...getTagProps({ index })} key={index} />
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

export default Autocomplete;
