import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
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
  cardHeader?: MuiCardHeaderProps;
  cardContent: JSX.Element | string;
  cardActions?: JSX.Element | JSX.Element[];
}

const Card = ({
  cardHeader,
  cardContent,
  cardActions,
  children,
  ...props
}: CardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiCard {...props} className={classes.root}>
      <MuiCardHeader
        {...cardHeader}
        classes={{ title: classes.title, subheader: classes.subheader }}
      />
      <MuiCardContent>{cardContent ?? children}</MuiCardContent>
      <MuiCardActions className={classes.actions}>{cardActions}</MuiCardActions>
    </MuiCard>
  );
};

export default Card;
