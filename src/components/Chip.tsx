import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core';

export interface ChipProps extends MuiChipProps {
  color: 'primary' | 'secondary';
}

const Chip = (props: ChipProps): JSX.Element => {
  return <MuiChip {...props} />;
};

Chip.defaultProps = {
  label: 'Label',
  size: 'medium',
  disabled: false,
  variant: 'default',
  color: 'primary',
  clickable: false,
};

export default Chip;
