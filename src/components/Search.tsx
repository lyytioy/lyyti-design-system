import { Autocomplete, AutocompleteProps } from '@material-ui/lab';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Search as SearchIcon } from '../icons';
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

export interface SearchProps
  extends AutocompleteProps<string, boolean | undefined, boolean | undefined, boolean | undefined> {
  label?: string;
  placeholder?: string;
  margin?: 'dense' | 'normal';
  multiple?: boolean;
  options: string[];
}

const Search = ({
  label,
  placeholder,
  margin = 'dense',
  options,
  ...props
}: SearchProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Autocomplete
      options={options}
      {...props}
      className={classes.root}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          margin={margin}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            notched: false,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default Search;
