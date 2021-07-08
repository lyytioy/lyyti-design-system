import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: (props: Record<string, unknown>) => ({
      borderRadius: '3px',
      padding: props.chunky ? '15px 23px' : '5px 15px',
      '& > *': {
        zIndex: 1,
      },
      '&::before': {
        content: '""',
        height: '100%',
        width: '0%',
        right: 0,
        position: 'absolute',
        transition: 'width 500ms cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        zIndex: 0,
      },
      '&:hover': {
        '&::before': {
          width: '100%',
        },
      },
    }),
    containedPrimary: {
      border: '1px solid',
      borderColor: theme.palette.primary.main,
      '&::before': {
        backgroundColor: `${theme.palette.primary.dark}`,
      },
      '&:hover': {
        backgroundColor: `${theme.palette.primary.main}`,
      },
    },
    containedSecondary: {
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      '&::before': {
        backgroundColor: `${theme.palette.secondary.dark}`,
      },
      '&:hover': {
        backgroundColor: `${theme.palette.secondary.main}`,
      },
    },
    outlinedPrimary: {
      '&::before': {
        backgroundColor: 'rgba(4, 91, 86,.06)',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    outlinedSecondary: {
      '&::before': {
        backgroundColor: 'rgba(238, 139, 58,.06)',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    textPrimary: {
      border: '1px solid rgba(4, 91, 86, 0.1)',
      '&::before': {
        backgroundColor: 'rgba(4, 91, 86, 0.1)',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    textSecondary: {
      border: '1px solid rgba(238, 139, 58, 0.1)',
      '&::before': {
        backgroundColor: 'rgba(238, 139, 58, 0.1)',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  })
);

export interface ButtonProps extends MuiButtonProps {
  chunky?: boolean;
  children: MuiButtonProps['children'] & { $$typeof?: symbol };
}

const Button = ({
  children,
  chunky = false,
  variant = 'contained',
  color = 'primary',
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const classes = useStyles({ chunky });

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
