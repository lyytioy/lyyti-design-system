import { Button as MuiButton, ButtonProps as MuiButtonProps, Fab, IconButton, ButtonGroup as MuiButtonGroup } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { forwardRef, Ref } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant'> {
  variant?: MuiButtonProps['variant'] | 'icon' | 'fab';
  children: MuiButtonProps['children'] & { $$typeof?: symbol; props?: any };
  color?: MuiButtonProps['color'] | 'white';
  loading?: boolean;
  'data-testid'?: string;
}

const Button = (
  {
    children,
    variant = 'contained',
    color = 'primary',
    loading = false,
    disabled = false,
    sx = {},
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
): JSX.Element => {
  const theme = useTheme();

  const iconPrimaryStyles = {
    '&::before': {
      backgroundColor: 'primary.dark',
    },
    '&:hover': {
      backgroundColor: 'primaryStates.hover',
    },
    '&:active': {
      backgroundColor: 'primaryStates.activeContained',
    },
  };

  const iconSecondaryStyles = {
    '&::before': {
      backgroundColor: 'secondary.dark',
    },
    '&:hover': {
      backgroundColor: 'secondaryStates.hover',
    },
    '&:active': {
      backgroundColor: 'secondaryStates.activeContained',
    },
  };

  const iconErrorStyles = {
    '&::before': {
      backgroundColor: 'error.dark',
    },
    '&:hover': {
      backgroundColor: 'errorStates.hover',
    },
    '&:active': {
      backgroundColor: 'errorStates.activeContained',
    },
  };

  if (variant === 'icon') {
    return (
      <IconButton
        ref={ref}
        color={color}
        disabled={disabled}
        size="large"
        sx={{
          '&.MuiIconButton-root:hover': { backgroundColor: alpha(theme.palette.white.main, 0.5) },
          '&.MuiIconButton-colorPrimary': iconPrimaryStyles,
          '&.MuiIconButton-colorSecondary': iconSecondaryStyles,
          '&.MuiIconButton-colorError': iconErrorStyles,
          ...sx,
        }}
        {...props}
      >
        {children}
      </IconButton>
    );
  }

  if (variant === 'fab') {
    return (
      <Fab ref={ref} color={color} disabled={disabled} size="large" sx={{ ...sx }} {...props}>
        {children}
      </Fab>
    );
  }

  const outlinedPrimary = {
    '&:hover': {
      backgroundColor: 'primaryStates.hover',
    },
  };

  const outlinedSecondary = {
    '&:hover': {
      backgroundColor: 'secondaryStates.hover',
    },
  };

  const outlinedError = {
    '&:hover': {
      backgroundColor: 'errorStates.hover',
    },
  };

  const outlinedInfo = {
    '&:hover': {
      backgroundColor: 'infoStates.hover',
    },
  };

  const outlinedSuccess = {
    '&:hover': {
      backgroundColor: 'successStates.hover',
    },
  };

  const outlinedWarning = {
    '&:hover': {
      backgroundColor: 'warningStates.hover',
    },
  };

  const buttonProps = {
    ref,
    variant,
    disabled,
    sx: {
      '&.MuiButton-outlined': {
        backgroundColor: 'white.main',
      },
      '&.MuiButton-outlinedPrimary': outlinedPrimary,
      '&.MuiButton-outlinedSecondary': outlinedSecondary,
      '&.MuiButton-outlinedError': outlinedError,
      '&.MuiButton-outlinedInfo': outlinedInfo,
      '&.MuiButton-outlinedSuccess': outlinedSuccess,
      '&.MuiButton-outlinedWarning': outlinedWarning,
      ...sx,
    },
    ...props,
  };

  if (loading) {
    console.log({buttonProps})
    return (
      <MuiButtonGroup variant="outlined" aria-label="loading button group">
      <LoadingButton color={color} loading={loading} {...buttonProps}>
        {children}
      </LoadingButton>
      </MuiButtonGroup>
    );
  }

  return (
    <MuiButton color={color} {...buttonProps}>
      {children}
    </MuiButton>
  );
};
export default forwardRef(Button);
