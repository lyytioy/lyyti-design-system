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
    'renderInput'
  > {
  label?: string;
  placeholder?: string;
  margin?: 'dense' | 'normal';
  multiple?: boolean;
  adornment?: string | JSX.Element;
  filterSelectedOptions?: boolean;
}

const Multiselect = ({
  label,
  placeholder,
  margin = 'dense',
  options,
  getOptionLabel = (option: OptionsType) => option.value,
  filterSelectedOptions = true,
  adornment,
  ...props
}: MultiselectProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Autocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      {...props}
      className={classes.root}
      filterSelectedOptions={filterSelectedOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          margin={margin}
          variant="outlined"
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
