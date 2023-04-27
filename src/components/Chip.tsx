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
  let overrideDeleteIconStyles = {
    color: 'none',
    '&:hover': { color: 'none' },
    '&:active': { color: 'none' },
  };
  if (color === 'white') {
    if (variant === 'outlined') {
      overrideDeleteIconStyles = {
        color: 'white.main',
        '&:hover': { color: 'white.dark' },
        '&:active': { color: 'white.light' },
      };
    } else {
      overrideDeleteIconStyles = {
        color: 'grey.200',
        '&:hover': { color: 'grey.400' },
        '&:active': { color: 'grey.300' },
      };
    }
  }

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
