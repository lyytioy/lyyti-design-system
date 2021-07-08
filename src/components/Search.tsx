import { Search as SearchIcon } from '../icons';
import TextField, { TextFieldProps } from './TextField';
import Multiselect, { MultiselectProps, OptionsType } from './Multiselect';

export type SearchProps<T = OptionsType> = (
  | Omit<MultiselectProps<T>, 'getOptionLabel'>
  | Omit<TextFieldProps, 'getOptionLabel'>
) & {
  fullWidth: boolean;
  options?: T[];
};

const Search = (props: SearchProps): JSX.Element => {
  const searchIcon = <SearchIcon fontSize="small" />;
  if ((props as MultiselectProps).options?.length) {
    return <Multiselect {...(props as MultiselectProps)} adornment={searchIcon} />;
  }
  return <TextField {...(props as TextFieldProps)} startAdornment={searchIcon} />;
};

export default Search;
