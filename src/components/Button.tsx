import { Button as MuiButton, ButtonProps as MuiButtonProps, Fab, IconButton } from '@mui/material';
import { alpha, useTheme } from '@mui/material/styles';
import { forwardRef, Ref } from 'react';
import { LoadingButton } from '@mui/lab';

const containedBoxShadow =
  '0.79px 6.95px 11px rgba(0, 0, 0, 0.0096), 0.52px 4.53px 6.44px rgba(0, 0, 0, 0.0157), 0.31px 2.76px 3.5px rgba(0, 0, 0, 0.02), 0.17px 1.52px 1.79px rgba(0, 0, 0, 0.0243), 0.08px 0.72px 0.9px rgba(0, 0, 0, 0.0304), 0.03px 0.25px 0.43px rgba(0, 0, 0, 0.04);';

export interface ButtonProps extends Omit<MuiButtonProps, 'color' | 'variant' | 'size'> {
  chunky?: boolean;
  variant?: MuiButtonProps['variant'] | 'icon' | 'fab';
  children: MuiButtonProps['children'] & { $$typeof?: symbol; props?: any };
  color?: 'primary' | 'secondary' | 'danger' | 'inherit' | 'white';
  loading?: boolean;
  'data-testid'?: string;
}

const Button = (
  {
    children,
    chunky = false,
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
  const buttonColor = color === 'danger' ? 'error' : color;

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

  const iconDangerStyles = {
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
        color={buttonColor}
        disabled={disabled}
        size="large"
        sx={{
          '&.MuiIconButton-root:hover': { backgroundColor: alpha(theme.palette.white.main, 0.5) },
          '&.MuiIconButton-colorPrimary': iconPrimaryStyles,
          '&.MuiIconButton-colorSecondary': iconSecondaryStyles,
          '&.MuiIconButton-colorError': iconDangerStyles,
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
      <Fab ref={ref} color={buttonColor} disabled={disabled} size="large" sx={{ ...sx }} {...props}>
        {children}
      </Fab>
    );
  }

  const containedPrimary = {
    boxShadow: 'none',
    '&::before': {
      backgroundColor: 'primary.dark',
    },
    '&:hover': {
      backgroundColor: 'primary.main',
    },
    '&:active': {
      backgroundColor: 'primaryStates.activeContained',
    },
    '&.Mui-disabled': {
      backgroundColor: 'primaryStates.disabledBg',
      color: 'primary.contrastText',
    },
  };

  const containedSecondary = {
    boxShadow: 'none',
    '&::before': {
      backgroundColor: 'secondary.dark',
    },
    '&:hover': {
      backgroundColor: 'secondary.main',
    },
    '&:active': {
      backgroundColor: 'secondaryStates.activeContained',
    },
    '&.Mui-disabled': {
      backgroundColor: 'secondaryStates.disabledBg',
      color: 'secondary.contrastText',
    },
  };

  const containedDanger = {
    boxShadow: 'none',
    '&::before': {
      backgroundColor: 'error.dark',
    },
    '&:hover': {
      backgroundColor: 'error.main',
    },
    '&:active': {
      backgroundColor: 'errorStates.activeContained',
    },
    '&.Mui-disabled': {
      backgroundColor: 'errorStates.disabledBg',
      color: 'error.contrastText',
    },
  };

  const outlinedPrimary = {
    '&::before': {
      backgroundColor: 'primaryStates.hover',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'primaryStates.activeOutlined',
    },
    '&.Mui-disabled': {
      border: '1px solid',
      borderColor: alpha(theme.palette.primary.main, 0.5),
      color: alpha(theme.palette.primary.main, 0.5),
    },
  };

  const outlinedSecondary = {
    '&::before': {
      backgroundColor: 'secondaryStates.hover',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'secondaryStates.activeOutlined',
    },
    '&.Mui-disabled': {
      border: '1px solid',
      borderColor: alpha(theme.palette.secondary.main, 0.5),
      color: alpha(theme.palette.secondary.main, 0.5),
    },
  };

  const outlinedDanger = {
    '&::before': {
      backgroundColor: 'errorStates.hover',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'errorStates.activeOutlined',
    },
    '&.Mui-disabled': {
      border: '1px solid',
      borderColor: alpha(theme.palette.error.main, 0.5),
      color: alpha(theme.palette.error.main, 0.5),
    },
  };

  const textPrimary = {
    '&::before': {
      backgroundColor: 'primaryStates.hover',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'primaryStates.activeOutlined',
    },
    '&.Mui-disabled': {
      color: alpha(theme.palette.primary.main, 0.5),
    },
  };

  const textSecondary = {
    '&::before': {
      backgroundColor: 'secondaryStates.hover',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'secondaryStates.activeOutlined',
    },
    '&.Mui-disabled': {
      color: alpha(theme.palette.secondary.main, 0.5),
    },
  };

  const textDanger = {
    '&::before': {
      backgroundColor: 'errorStates.hover',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&:active': {
      backgroundColor: 'errorStates.activeOutlined',
    },
    '&.Mui-disabled': {
      color: alpha(theme.palette.error.main, 0.5),
    },
  };

  const buttonProps = {
    ref,
    variant,
    disabled,
    sx: {
      ...(loading && { color: 'transparent !important' }),
      borderRadius: '3px',
      padding: chunky ? '15px 23px' : '5px 15px',
      zIndex: 1,
      '&::before': {
        content: '""',
        height: '100%',
        width: '0%',
        right: 0,
        position: 'absolute',
        transitionProperty: 'width, box-shadow',
        transitionDuration: '500ms',
        transitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        zIndex: -1,
        borderRadius: '3px',
      },
      '&:hover': {
        '&::before': {
          width: '100%',
          boxShadow: containedBoxShadow,
        },
      },
      '&:active': { boxShadow: containedBoxShadow },
      '&.MuiButton-containedPrimary': containedPrimary,
      '&.MuiButton-containedSecondary': containedSecondary,
      '&.MuiButton-containedError': containedDanger,
      '&.MuiButton-outlinedPrimary': outlinedPrimary,
      '&.MuiButton-outlinedSecondary': outlinedSecondary,
      '&.MuiButton-outlinedError': outlinedDanger,
      '&.MuiButton-textPrimary': textPrimary,
      '&.MuiButton-textSecondary': textSecondary,
      '&.MuiButton-textError': textDanger,
      [`& .MuiButton-startIcon > *:nth-of-type(1)`]: {
        fontSize: chunky ? '20px' : '16px',
      },
      [`& .MuiButton-endIcon > *:nth-of-type(1)`]: {
        fontSize: chunky ? '20px' : '16px',
      },
      ...sx,
    },
    ...props,
  };

  if (loading) {
    return (
      <LoadingButton color={buttonColor} loading={loading} {...buttonProps}>
        {children}
      </LoadingButton>
    );
  }

  return (
    <MuiButton color={buttonColor} {...buttonProps}>
      {children}
    </MuiButton>
  );
};
export default forwardRef(Button);
