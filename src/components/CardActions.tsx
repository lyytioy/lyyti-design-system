import {
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    root: {
      padding: '16px',
    },
  })
);

export type CardActionsProps = MuiCardActionsProps;

const CardActions = (props: CardActionsProps): JSX.Element => {
  const classes = useStyles();

  return <MuiCardActions {...props} classes={{ root: classes.root }} />;
};

export default CardActions;
