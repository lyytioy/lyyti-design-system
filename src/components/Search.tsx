import { Search as SearchIcon } from '../icons';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SearchProps<T = OptionsType> = (
  | Omit<
      AutocompleteProps<T>,
      'adornment' | 'filterSelectedOptions' | 'getOptionLabel' | 'multiple'
    >
  | Omit<
      TextFieldProps,
      'endAdornment' | 'getOptionLabel' | 'hiddenLabel' | 'startAdornment' | 'variant'
    >
) & {
  freeSolo?: boolean;
  fullWidth?: boolean;
  options?: T[];
};

const Search = ({ freeSolo = true, fullWidth = false, ...props }: SearchProps): JSX.Element => {
  const searchIcon = <SearchIcon fontSize="small" />;
  console.log(fullWidth);
  if ((props as AutocompleteProps).options?.length) {
    return (
      <Autocomplete
        {...(props as AutocompleteProps)}
        adornment={searchIcon}
        freeSolo={freeSolo}
        fullWidth={fullWidth}
      />
    );
  }
  return (
    <TextField {...(props as TextFieldProps)} fullWidth={fullWidth} startAdornment={searchIcon} />
  );
};

export default Search;
