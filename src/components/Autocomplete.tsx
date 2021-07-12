import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField, { MarginTypes, ColorTypes } from './TextField';
import InputAdornment from './InputAdornment';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      '& .MuiInputAdornment-positionStart': {
        marginLeft: '6px',
      },
    },
  })
);

export type OptionsType = { id: number | string; value: string };

export interface AutocompleteProps<T = OptionsType>
  extends Omit<
    MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
    'renderInput' | 'startAdornment' | 'endAdornment' | 'variant'
  > {
  adornment?: string | JSX.Element;
  fullWidth?: boolean;
  label?: string;
  margin?: MarginTypes;
  multiple?: boolean;
  placeholder?: string;
  color?: ColorTypes;
}

const Autocomplete = ({
  adornment,
  fullWidth = false,
  getOptionLabel = (option: OptionsType) => option.value,
  label,
  margin = 'dense',
  options,
  placeholder,
  color = 'primary',
  ...props
}: AutocompleteProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiAutocomplete
      getOptionLabel={getOptionLabel}
      options={options}
      {...props}
      className={classes.root}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth={fullWidth}
          label={label}
          margin={margin}
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
          color={color}
        />
      )}
    />
  );
};

export default Autocomplete;
