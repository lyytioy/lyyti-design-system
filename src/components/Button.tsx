import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const buttonBoxShadow =
  '0.79px 6.95px 11px rgba(0, 0, 0, 0.0096), 0.52px 4.53px 6.44px rgba(0, 0, 0, 0.0157), 0.31px 2.76px 3.5px rgba(0, 0, 0, 0.02), 0.17px 1.52px 1.79px rgba(0, 0, 0, 0.0243), 0.08px 0.72px 0.9px rgba(0, 0, 0, 0.0304), 0.03px 0.25px 0.43px rgba(0, 0, 0, 0.04)';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: (chunky) => ({
      borderRadius: '3px',
      transitionTimingFunction: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      padding: chunky ? '15px 23px' : '5px 15px',
      '&::before': {
        content: '""',
        height: '100%',
        width: '0%',
        right: 0,
        position: 'absolute',
        transition: 'all 5000ms cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        boxShadow: `${buttonBoxShadow},inset 0px -0px 0 0 rgba(4, 91, 86,.06)`,
      },
      '&:hover': {
        '&::before': {
          // boxShadow: `${buttonBoxShadow},inset 0px -0px 0 0 rgba(4, 91, 86,.06)`,
          width: '100%',
        },
      },
    }),
    containedPrimary: {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      boxShadow: `${buttonBoxShadow},inset 0 -0px 0 0 ${theme.palette.primary.dark}`,
      '&:hover': {
        boxShadow: `${buttonBoxShadow}, inset -100px -0px 0 0 ${theme.palette.primary.dark}`,
      },
    },
    containedSecondary: {
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      boxShadow: `${buttonBoxShadow},inset 0 -0px 0 0 ${theme.palette.secondary.dark}`,
      '&:hover': {
        boxShadow: `${buttonBoxShadow}, inset -100px -0px 0 0 ${theme.palette.secondary.dark}`,
      },
    },
    outlinedPrimary: {},
    outlinedSecondary: {
      boxShadow: 'inset -0px -0px 0 0 rgba(238, 139, 58,.06)',
      '&:hover': {
        boxShadow: 'inset -100px -0px 0 0 rgba(238, 139, 58,.06)',
      },
    },
    textPrimary: {
      border: '1px solid rgba(4, 91, 86, 0.1)',
      boxShadow: `${buttonBoxShadow},inset -0px -0px 0 0 rgba(4, 91, 86, 0.1)`,
      '&:hover': {
        boxShadow: `${buttonBoxShadow},inset -100px -0px 0 0 rgba(4, 91, 86, 0.1)`,
      },
    },
    textSecondary: {
      border: '1px solid rgba(238, 139, 58, 0.1)',
      boxShadow: `${buttonBoxShadow},inset -0px -0px 0 0 rgba(238, 139, 58, 0.1)`,
      '&:hover': {
        boxShadow: `${buttonBoxShadow},inset -100px -0px 0 0 rgba(238, 139, 58, 0.1)`,
      },
    },
  })
);

export type ColorTypes = 'primary' | 'secondary' | 'inherit' | undefined;

export type ButtonProps = {
  color?: ColorTypes;
  chunky?: boolean;
  children: MuiButtonProps['children'] & { $$typeof?: symbol };
} & Omit<MuiButtonProps, 'color'>;

const Button = ({
  children,
  chunky = false,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = useStyles(chunky);

  if (
    children &&
    Object.keys(children).includes('$$typeof') &&
    children.$$typeof === Symbol.for('react.element')
  ) {
    return (
      <IconButton color={color} disabled={disabled}>
        {children}
      </IconButton>
    );
  }

  return (
    <MuiButton
      classes={{
        root: classes.root,
        containedPrimary: classes.containedPrimary,
        containedSecondary: classes.containedSecondary,
        outlinedPrimary: classes.outlinedPrimary,
        outlinedSecondary: classes.outlinedSecondary,
        textPrimary: classes.textPrimary,
        textSecondary: classes.textSecondary,
      }}
      variant={variant}
      color={color}
      disabled={disabled}
      {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
