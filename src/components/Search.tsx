import { Search as SearchIcon } from '../icons';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SingleOptionSearchProps = Omit<
  TextFieldProps,
  'endAdornment' | 'getOptionLabel' | 'hiddenLabel' | 'startAdornment' | 'variant'
>;

export type MultipleOptionsSearchProps = Omit<
  AutocompleteProps<OptionsType>,
  'adornment' | 'filterSelectedOptions' | 'getOptionLabel' | 'multiple' | 'options'
> & {
  options?: AutocompleteProps['options'];
};

export type SearchProps = MultipleOptionsSearchProps | SingleOptionSearchProps;

const Search = ({ ...props }: SearchProps): JSX.Element => {
  const searchIcon = <SearchIcon fontSize="small" />;

  const { freeSolo = true, options = [], ...multiProps } = props as MultipleOptionsSearchProps;
  const singleProps = props as SingleOptionSearchProps;

  if ((props as AutocompleteProps).options?.length) {
    return (
      <Autocomplete adornment={searchIcon} freeSolo={freeSolo} options={options} {...multiProps} />
    );
  }
  return <TextField startAdornment={searchIcon} {...singleProps} />;
};

export default Search;
