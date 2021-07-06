import { Autocomplete, AutocompleteProps } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import TextField from './TextField';
import InputAdornment from './InputAdornment';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      '& .MuiInputAdornment-positionStart': {
        marginLeft: '6px',
      },
    },
  })
);

export type OptionsType = { id: number | string; value: string };

export interface MultiselectProps<T = OptionsType>
  extends Omit<
    AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
    'renderInput' | 'startAdornment' | 'endAdornment' | 'variant'
  > {
  adornment?: string | JSX.Element;
  filterSelectedOptions?: boolean;
  fullWidth?: boolean;
  label?: string;
  margin?: 'dense' | 'normal';
  multiple?: boolean;
  placeholder?: string;
}

const Multiselect = ({
  adornment,
  filterSelectedOptions = true,
  fullWidth = false,
  getOptionLabel = (option: OptionsType) => option.value,
  label,
  margin = 'dense',
  options,
  placeholder,
  ...props
}: MultiselectProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Autocomplete
      getOptionLabel={getOptionLabel}
      options={options}
      {...props}
      className={classes.root}
      filterSelectedOptions={filterSelectedOptions}
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
        />
      )}
    />
  );
};

export default Multiselect;
