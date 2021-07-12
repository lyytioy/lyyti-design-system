import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps as MuiAutocompleteProps,
} from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField, { MarginTypes, ColorTypes } from './TextField';
import InputAdornment from './InputAdornment';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: (props: Record<string, unknown>) => {
      let iconColor = props.disabled ? theme.palette.action.disabled : theme.palette.text.primary;
      if (props.color === 'white') iconColor = '#fff';

      return {
        '& .MuiInputAdornment-positionStart': {
          marginLeft: '6px',
        },
        '& .MuiSvgIcon-root': {
          color: iconColor,
        },
      };
    },
  })
);

export type OptionsType = { id: number | string; value: string };

export interface AutocompleteProps<T = OptionsType>
  extends Omit<
    MuiAutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
    'hiddenLabel' | 'renderInput' | 'startAdornment' | 'endAdornment' | 'variant'
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
  disabled = false,
  ...props
}: AutocompleteProps): JSX.Element => {
  const classes = useStyles({ color, disabled });

  return (
    <MuiAutocomplete
      disabled={disabled}
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
