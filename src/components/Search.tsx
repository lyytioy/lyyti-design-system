import { SearchRounded } from '../icons';
import TextField, { TextFieldProps } from './TextField';
import Autocomplete, { AutocompleteProps, OptionsType } from './Autocomplete';

export type SingleOptionSearchProps = Omit<
  TextFieldProps,
  'getOptionLabel' | 'hiddenLabel' | 'variant' | 'startAdornment' | 'endAdornment'
>;

export type MultipleOptionsSearchProps = Omit<
  AutocompleteProps<OptionsType>,
  'adornment' | 'filterSelectedOptions' | 'multiple' | 'options'
> & {
  options?: AutocompleteProps['options'];
};

export type SearchCustomFieldProps = {
  adornmentOnRight?: boolean;
  adornmentColor?: string;
};

export type SearchProps = (MultipleOptionsSearchProps | SingleOptionSearchProps) &
  SearchCustomFieldProps;

const Search = ({ ...props }: SearchProps): JSX.Element => {
  const searchIcon = <SearchRounded sx={{ color: props.adornmentColor ?? 'inherit' }} />;

  const { freeSolo = true, options = [], ...multiProps } = props as MultipleOptionsSearchProps;
  const singleProps = props as SingleOptionSearchProps;

  if (options.length) {
    return (
      <Autocomplete adornment={searchIcon} freeSolo={freeSolo} options={options} {...multiProps} />
    );
  }

  return (
    <TextField
      startAdornment={props.adornmentOnRight ? undefined : searchIcon}
      endAdornment={props.adornmentOnRight ? searchIcon : undefined}
      {...singleProps}
    />
  );
};

export default Search;
