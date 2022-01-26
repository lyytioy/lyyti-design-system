import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  IconButton,
  Theme,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const containedBoxShadow =
  '0.79px 6.95px 11px rgb(0 0 0 / 1%), 0.52px 4.53px 6.44px rgb(0 0 0 / 2%), 0.31px 2.76px 3.5px rgb(0 0 0 / 2%), 0.17px 1.52px 1.79px rgb(0 0 0 / 2%), 0.08px 0.72px 0.9px rgb(0 0 0 / 3%), 0.03px 0.25px 0.43px rgb(0 0 0 / 4%), inset 0 0px 0 0 #034e49';

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
        borderRadius: '3px',
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
      boxShadow: containedBoxShadow,
      '&::before': {
        backgroundColor: `${theme.palette.primary.dark}`,
      },
      '&:hover': {
        backgroundColor: `${theme.palette.primary.main}`,
        boxShadow: containedBoxShadow,
      },
    },
    containedSecondary: {
      border: '1px solid',
      borderColor: theme.palette.secondary.main,
      boxShadow: containedBoxShadow,
      '&::before': {
        backgroundColor: `${theme.palette.secondary.dark}`,
      },
      '&:hover': {
        backgroundColor: `${theme.palette.secondary.main}`,
        boxShadow: containedBoxShadow,
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

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  chunky?: boolean;
  children: MuiButtonProps['children'] & { $$typeof?: symbol };
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
  const classes = useStyles({ chunky });

  if (
    children &&
    Object.keys(children).includes('$$typeof') &&
    children.$$typeof === Symbol.for('react.element')
  ) {
    return (
      <IconButton color={color} disabled={disabled} size="large" ref={ref}>
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
      ref={ref}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
export default forwardRef(Button);
