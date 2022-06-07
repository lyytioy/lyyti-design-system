import { Globe } from '../icons';
import Select, { SingleSelectProps } from './Select';
import { Ref } from 'react';

export type LanguageSelectProps = Omit<SingleSelectProps, 'adornment' | 'multiple'>;

const LanguageSelector = (props: LanguageSelectProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <Select ref={ref} multiple={false} adornment={<Globe fontSize="small" />} {...props} />;
};

export default LanguageSelector;
