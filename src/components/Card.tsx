import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      borderRadius: '3px',
      border: '1px solid',
      borderColor: theme.palette.grey[100],
    },
    actions: {
      padding: '16px',
    },
    title: {
      fontSize: '15px',
    },
    subheader: {
      fontSize: '15px',
    },
  })
);

export interface CardProps extends MuiCardProps {
  title?: string;
  subheader?: JSX.Element | string;
  headerAction?: JSX.Element;
  headerAvatar?: JSX.Element;
  content: JSX.Element | string;
  actions?: JSX.Element;
}

const Card = ({
  title,
  subheader,
  headerAction,
  headerAvatar,
  content,
  actions,
  children,
  ...props
}: CardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiCard {...props} className={classes.root}>
      <MuiCardHeader
        title={title}
        subheader={subheader}
        action={headerAction}
        avatar={headerAvatar}
        classes={{ title: classes.title, subheader: classes.subheader }}
      />
      <MuiCardContent>{content ?? children}</MuiCardContent>
      {actions && <MuiCardActions className={classes.actions}>{actions}</MuiCardActions>}
    </MuiCard>
  );
};

export default Card;
