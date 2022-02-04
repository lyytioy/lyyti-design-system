import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

export interface ChipProps extends MuiChipProps {
  color?: 'primary' | 'secondary';
  clickable?: boolean;
  disabled?: boolean;
  'data-testid'?: string;
}

const Chip = ({
  color = 'primary',
  variant = 'filled',
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
      sx={{ root: { bgcolor: 'primary.main' } }}
      {...props}
    />
  );
};

export default Chip;
