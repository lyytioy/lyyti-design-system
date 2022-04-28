import { Button as MuiButton, ButtonProps as MuiButtonProps, IconButton } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { forwardRef, Ref } from 'react';

const containedBoxShadow =
  '0.79px 6.95px 11px rgba(0, 0, 0, 0.0096), 0.52px 4.53px 6.44px rgba(0, 0, 0, 0.0157), 0.31px 2.76px 3.5px rgba(0, 0, 0, 0.02), 0.17px 1.52px 1.79px rgba(0, 0, 0, 0.0243), 0.08px 0.72px 0.9px rgba(0, 0, 0, 0.0304), 0.03px 0.25px 0.43px rgba(0, 0, 0, 0.04);';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  chunky?: boolean;
  children: MuiButtonProps['children'] & { $$typeof?: symbol; props?: any };
  color?: 'primary' | 'secondary' | 'inherit';
  'data-testid'?: string;
}

const Button = (
  {
    children,
    chunky = false,
    variant = 'contained',
    color = 'secondary',
    disabled = false,
    ...props
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>
): JSX.Element => {
  const theme = useTheme();

  if (
    children &&
    Object.keys(children).includes('$$typeof') &&
    children.$$typeof === Symbol.for('react.element') &&
    typeof children.props !== 'undefined' &&
    children.props.fontSize
  ) {
    return (
      <IconButton ref={ref} color={color} disabled={disabled} size="large" {...props}>
        {children}
      </IconButton>
    );
  }

  const containedPrimary = {
    boxShadow: containedBoxShadow,
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
    boxShadow: containedBoxShadow,
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

  const outlinedPrimary = {
    boxShadow: containedBoxShadow,
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
    boxShadow: containedBoxShadow,
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

  const textPrimary = {
    boxShadow: containedBoxShadow,
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
    boxShadow: containedBoxShadow,
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

  return (
    <MuiButton
      ref={ref}
      variant={variant}
      color={color}
      disabled={disabled}
      sx={{
        borderRadius: '3px',
        padding: chunky ? '15px 23px' : '5px 15px',
        zIndex: 1,
        '&::before': {
          content: '""',
          height: '100%',
          width: '0%',
          right: 0,
          position: 'absolute',
          transition: 'width 500ms cubic-bezier(0.645, 0.045, 0.355, 1.000)',
          zIndex: -1,
          borderRadius: '3px',
        },
        '&:hover': {
          '&::before': {
            width: '100%',
          },
        },
        '&.MuiButton-containedPrimary': containedPrimary,
        '&.MuiButton-containedSecondary': containedSecondary,
        '&.MuiButton-outlinedPrimary': outlinedPrimary,
        '&.MuiButton-outlinedSecondary': outlinedSecondary,
        '&.MuiButton-textPrimary': textPrimary,
        '&.MuiButton-textSecondary': textSecondary,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
export default forwardRef(Button);
