import { Link as MuiLink, LinkProps as MuiLinkProps, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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

export interface LinkProps extends MuiLinkProps {
  'data-testid'?: string;
}

const Link = (props: LinkProps): JSX.Element => {
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
