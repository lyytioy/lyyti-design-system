import { OptionsType } from './Autocomplete';
import { Globe } from '../icons';
import Select, { SingleSelectProps } from './Select';

export type LanguageSelectProps = Omit<SingleSelectProps, 'adornment' | 'multiple'>;

const LanguageSelector = ({ ...props }: LanguageSelectProps): JSX.Element => {
  return <Select multiple={false} adornment={<Globe fontSize="small" />} {...props} />;
};

export default LanguageSelector;
