import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface ChipProps extends MuiChipProps {
  color?: 'primary' | 'secondary' | 'white';
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
  const overrideDeleteIconStyles = {
    color: color === 'white' ? (variant === 'outlined' ? 'white.main' : 'grey.200') : 'none',
    '&:hover': {
      color: color === 'white' ? (variant === 'outlined' ? 'white.dark' : 'grey.400') : 'none',
    },
    '&:active': {
      color: color === 'white' ? (variant === 'outlined' ? 'white.light' : 'grey.300') : 'none',
    },
  };

  const overrideChipAvatarStyles = {
    color: color === 'white' ? (variant === 'outlined' ? 'none' : 'white.main') : 'none',
  };

  const overrideAvatarStyles = {
    backgroundColor:
      color === 'white' ? (variant === 'outlined' ? 'white.main' : 'primary.main') : 'none',
  };

  return (
    <MuiChip
      ref={ref}
      color={color}
      variant={variant}
      size={size}
      clickable={clickable}
      disabled={disabled}
      sx={{
        root: {
          bgcolor: 'primary.main',
        },
        '& .MuiChip-deleteIcon': overrideDeleteIconStyles,
        '& .MuiChip-avatar': overrideChipAvatarStyles,
        '& .MuiAvatar-root': overrideAvatarStyles,
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Chip);
