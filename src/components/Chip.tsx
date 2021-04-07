import { Chip as MuiChip, ChipProps as MuiChipProps } from '@material-ui/core';

export interface ChipProps extends MuiChipProps {
  color: 'primary' | 'secondary';
  clickable: boolean;
  disabled: boolean;
}

const Chip = ({
  color = 'primary',
  variant = 'default',
  size = 'medium',
  clickable = false,
  disabled = false,
  ...props
}: ChipProps): JSX.Element => {
  return (
    <MuiChip
      color={color}
      variant={variant}
      size={size}
      clickable={clickable}
      disabled={disabled}
      {...props}
    />
  );
};

export default Chip;
