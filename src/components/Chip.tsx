import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core';

export interface ChipProps extends MuiChipProps {
  color: 'primary' | 'secondary';
}

const Chip = ({ color = 'primary', ...props }: ChipProps): JSX.Element => {
  return <MuiChip color={color} {...props} />;
};

export default Chip;
