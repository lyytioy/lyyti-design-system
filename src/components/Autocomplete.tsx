import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';
import TextField, { SizeTypes, ColorTypes } from './TextField';
import InputAdornment from './InputAdornment';
import Chip from './Chip';

export type OptionsType = { id: number | string; value: string };

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
  getOptionLabel = (option: OptionsType) => option.value ?? option,
  label,
  size = 'medium',
  options,
  placeholder,
  color = 'primary',
  disabled = false,
  error,
  helperText,
  'data-testid': testid,
  ...props
}: AutocompleteProps): JSX.Element => {
  let iconColor = disabled ? 'action.disabled' : 'text.primary';
  if (color === 'white') iconColor = '#fff';
  iconColor = 'red';

  return (
    <MuiAutocomplete
      disabled={disabled}
      getOptionLabel={getOptionLabel}
      options={options}
      sx={{
        color: 'red' + ' !important',
        endAdornment: {
          color: 'red',
        },
        '& .MuiIconButton': {
          color: 'red',
        },
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
