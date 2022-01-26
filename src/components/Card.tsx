import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  Theme,
} from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme, { headerBackgroundColor: string }>((theme) =>
  createStyles({
    root: {
      borderRadius: '3px',
      border: '1px solid',
      borderColor: theme.palette.grey[100],
    },
    actions: {
      padding: '16px',
    },
    header: (props) => ({
      backgroundColor: props.headerBackgroundColor,
      '& .MuiCardHeader-title': {
        fontSize: '15px',
      },
      '& .MuiCardHeader-subheader': {
        fontSize: '15px',
      },
    }),
  })
);

export interface CardProps extends MuiCardProps {
  title?: string;
  subheader?: JSX.Element | string;
  headerAction?: JSX.Element;
  headerAvatar?: JSX.Element;
  children: JSX.Element | string;
  actions?: JSX.Element;
  headerBackgroundColor?: string;
  'data-testid'?: string;
}

const Card = ({
  title,
  subheader,
  headerAction,
  headerAvatar,
  actions,
  headerBackgroundColor = 'inherit',
  children,
  ...props
}: CardProps): JSX.Element => {
  const classes = useStyles({ headerBackgroundColor });

  return (
    <MuiCard {...props} className={classes.root}>
      {(title || subheader) && (
        <MuiCardHeader
          title={title}
          subheader={subheader}
          action={headerAction}
          avatar={headerAvatar}
          className={classes.header}
        />
      )}
      <MuiCardContent>{children}</MuiCardContent>
      {actions && <MuiCardActions className={classes.actions}>{actions}</MuiCardActions>}
    </MuiCard>
  );
};

export default Card;
