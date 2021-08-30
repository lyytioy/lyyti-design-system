import { OptionsType } from './Autocomplete';
import { Globe } from '../icons';
import Select, { SelectProps } from './Select';

export type LanguageSelectProps<T = OptionsType> = Omit<SelectProps, 'adornment' | 'multiple'> & {
  options: T[];
  helperText?: string;
  error?: boolean;
};

const LanguageSelector = (props: LanguageSelectProps): JSX.Element => {
  const { options } = props;
  return (
    <Select {...(props as SelectProps)} adornment={<Globe fontSize="small" />} options={options} />
  );
};

export default LanguageSelector;
