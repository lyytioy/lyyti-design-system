import { Search as SearchIcon } from '../icons';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SearchProps<T = OptionsType> = (
  | Omit<AutocompleteProps<T>, 'getOptionLabel'>
  | Omit<TextFieldProps, 'getOptionLabel'>
) & {
  fullWidth: boolean;
  options?: T[];
};

const Search = (props: SearchProps): JSX.Element => {
  const searchIcon = <SearchIcon fontSize="small" />;
  if ((props as AutocompleteProps).options?.length) {
    return <Autocomplete {...(props as AutocompleteProps)} adornment={searchIcon} />;
  }
  return <TextField {...(props as TextFieldProps)} startAdornment={searchIcon} />;
};

export default Search;
