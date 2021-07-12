import { Search as SearchIcon } from '../icons';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SearchProps<T = OptionsType> = (
  | Omit<AutocompleteProps<T>, 'getOptionLabel' | 'multiple' | 'filterSelectedOptions'>
  | Omit<TextFieldProps, 'getOptionLabel'>
) & {
  freeSolo?: boolean;
  fullWidth: boolean;
  options?: T[];
};

const Search = (props: SearchProps): JSX.Element => {
  const { freeSolo = true } = props;
  const searchIcon = <SearchIcon fontSize="small" />;
  if ((props as AutocompleteProps).options?.length) {
    return (
      <Autocomplete {...(props as AutocompleteProps)} adornment={searchIcon} freeSolo={freeSolo} />
    );
  }
  return <TextField {...(props as TextFieldProps)} startAdornment={searchIcon} />;
};

export default Search;
