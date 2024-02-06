import { PublicRounded } from '../icons';
import Select, { SingleSelectProps } from './Select';
import { forwardRef, Ref } from 'react';

export type LanguageSelectProps = Omit<SingleSelectProps, 'adornment' | 'multiple'>;

const LanguageSelector = (props: LanguageSelectProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <Select ref={ref} multiple={false} adornment={<PublicRounded fontSize="small" />} {...props} />
  );
};

export default forwardRef(LanguageSelector);
