import { FunctionComponent } from 'react';
import {
  Link as MuiLink,
  LinkProps as MuiLinkProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.light,
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    underlineHover: {
      '&:hover': {
        color: theme.palette.primary.main,
        textDecorationColor: '#96E4E8',
      },
      '&:active': {
        color: '#5E8A88',
      },
    },
    underlineAlways: {
      textDecorationColor: '#96E4E8',
      '&:hover': {
        color: theme.palette.primary.main,
      },
      '&:active': {
        color: '#5E8A88',
      },
    },
  })
);

export type LinkProps = MuiLinkProps;

const Link: FunctionComponent<LinkProps> = (props) => {
  const classes = useStyles();

  return (
    <MuiLink
      {...props}
      classes={{
        root: classes.root,
        underlineHover: classes.underlineHover,
        underlineAlways: classes.underlineAlways,
      }}
    />
  );
};

export default Link;
