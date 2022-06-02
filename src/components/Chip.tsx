import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface ChipProps extends MuiChipProps {
  color?: 'primary' | 'secondary';
  clickable?: boolean;
  disabled?: boolean;
  'data-testid'?: string;
}

const Chip = (
  {
    color = 'primary',
    variant = 'filled',
    size = 'medium',
    clickable = false,
    disabled = false,
    sx = {},
    ...props
  }: ChipProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiChip
      ref={ref}
      color={color}
      variant={variant}
      size={size}
      clickable={clickable}
      disabled={disabled}
      sx={{ root: { bgcolor: 'primary.main' }, ...sx }}
      {...props}
    />
  );
};

export default forwardRef(Chip);
