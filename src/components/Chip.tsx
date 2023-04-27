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
    '&, &:hover, &:active': {
      color: 'none',
    },
    ...(color === 'white' && {
      color: 'grey.200',
      '&:active': {
        color: 'grey.300',
      },
      '&:hover': {
        color: 'grey.400',
      },
      ...(variant === 'outlined' && {
        color: 'white.main',
        '&:active': {
          color: 'white.light',
        },
        '&:hover': {
          color: 'white.dark',
        },
      }),
    }),
  };

  const overrideChipAvatarStyles = {
    color: color === 'white' && variant !== 'outlined' ? 'white.main' : 'none',
  };
  const overrideAvatarStyles = {
    backgroundColor: 'none',
    ...(color === 'white' && {
      backgroundColor: variant === 'outlined' ? 'white.main' : 'primary.main',
    }),
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
