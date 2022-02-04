import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
} from '@mui/material';

export interface CardProps
  extends Omit<MuiCardProps, 'elevation' | 'raised' | 'square' | 'variant'> {
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
  return (
    <MuiCard sx={{ borderRadius: '3px', border: '1px solid', borderColor: 'grey.100' }} {...props}>
      {(title || subheader) && (
        <MuiCardHeader
          title={title}
          subheader={subheader}
          action={headerAction}
          avatar={headerAvatar}
          sx={{
            bgcolor: headerBackgroundColor,
            '& .MuiCardHeader-title': {
              fontSize: '15px',
            },
            '& .MuiCardHeader-subheader': {
              fontSize: '15px',
            },
          }}
        />
      )}
      <MuiCardContent>{children}</MuiCardContent>
      {actions && <MuiCardActions sx={{ padding: '16px' }}>{actions}</MuiCardActions>}
    </MuiCard>
  );
};

export default Card;
