import { MenuItem } from '@material-ui/core';
import TextField, { TextFieldProps } from './TextField';
import { OptionsType } from './Autocomplete';
import { Globe } from '../icons';

export type LanguageSelectProps<T = OptionsType> = Omit<
  TextFieldProps,
  'startAdornment' | 'endAdornment' | 'variant' | 'multiple'
> & {
  options: T[];
};

const LanguageSelector = (props: LanguageSelectProps): JSX.Element => {
  const globeIcon = <Globe fontSize="small" />;
  const { options } = props;
  return (
    <TextField
      {...(props as TextFieldProps)}
      select
      startAdornment={globeIcon}
      SelectProps={{
        MenuProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            vertical: 'top',
            horizontal: 'left',
          },
          getContentAnchorEl: null,
        },
      }}>
      {options.map(({ id, value: label }) => (
        <MenuItem key={id} value={id}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default LanguageSelector;
