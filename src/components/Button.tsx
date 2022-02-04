import { Button as MuiButton, ButtonProps as MuiButtonProps, IconButton } from '@mui/material';

const containedBoxShadow =
  '0.79px 6.95px 11px rgb(0 0 0 / 1%), 0.52px 4.53px 6.44px rgb(0 0 0 / 2%), 0.31px 2.76px 3.5px rgb(0 0 0 / 2%), 0.17px 1.52px 1.79px rgb(0 0 0 / 2%), 0.08px 0.72px 0.9px rgb(0 0 0 / 3%), 0.03px 0.25px 0.43px rgb(0 0 0 / 4%), inset 0 0px 0 0 #034e49';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  chunky?: boolean;
  children: MuiButtonProps['children'] & { $$typeof?: symbol; props: any };
  color?: 'primary' | 'secondary' | 'inherit';
  'data-testid'?: string;
}

const Button = ({
  children,
  chunky = false,
  variant = 'contained',
  color = 'secondary',
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  if (
    children &&
    Object.keys(children).includes('$$typeof') &&
    children.$$typeof === Symbol.for('react.element') &&
    typeof children.props !== 'undefined' &&
    children.props.fontSize
  ) {
    return (
      <IconButton color={color} disabled={disabled} size="large">
        {children}
      </IconButton>
    );
  }

  return (
    <MuiButton
      variant={variant}
      color={color}
      disabled={disabled}
      {...props}
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
        '&.MuiButton-containedPrimary': {
          border: '1px solid',
          borderColor: 'primary.main',
          boxShadow: containedBoxShadow,
          '&::before': {
            backgroundColor: 'primary.dark',
          },
          '&:hover': {
            backgroundColor: 'primary.main',
            boxShadow: containedBoxShadow,
          },
        },
        '&.MuiButton-containedSecondary': {
          border: '1px solid',
          borderColor: 'secondary.main',
          boxShadow: containedBoxShadow,
          '&::before': {
            backgroundColor: 'secondary.dark',
          },
          '&:hover': {
            backgroundColor: 'secondary.main',
            boxShadow: containedBoxShadow,
          },
        },
        '&.MuiButton-outlinedPrimary': {
          '&::before': {
            backgroundColor: 'rgba(4, 91, 86,.06)',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&.MuiButton-outlinedSecondary': {
          '&::before': {
            backgroundColor: 'rgba(238, 139, 58,.06)',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&.MuiButton-textPrimary': {
          border: '1px solid rgba(4, 91, 86, 0.1)',
          '&::before': {
            backgroundColor: 'rgba(4, 91, 86, 0.1)',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        '&.MuiButton-textSecondary': {
          border: '1px solid rgba(238, 139, 58, 0.1)',
          '&::before': {
            backgroundColor: 'rgba(238, 139, 58, 0.1)',
          },
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      }}
    >
      {children}
    </MuiButton>
  );
};
export default Button;
