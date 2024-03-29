import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
} from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface CardProps
  extends Omit<MuiCardProps, 'elevation' | 'raised' | 'square' | 'variant' | 'title'> {
  title?: JSX.Element | string;
  subheader?: JSX.Element | string;
  headerAction?: JSX.Element;
  headerAvatar?: JSX.Element;
  children: JSX.Element | string;
  actions?: JSX.Element;
  headerBackgroundColor?: string;
  'data-testid'?: string;
}

const Card = (
  {
    title,
    subheader,
    headerAction,
    headerAvatar,
    actions,
    headerBackgroundColor = 'inherit',
    children,
    sx = {},
    ...props
  }: CardProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => {
  return (
    <MuiCard
      ref={ref}
      sx={{ borderRadius: '3px', border: '1px solid', borderColor: 'grey.100', ...sx }}
      {...props}
    >
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
      <MuiCardContent
        sx={{
          '&:last-child': {
            pb: '16px',
          },
        }}
      >
        {children}
      </MuiCardContent>
      {actions && <MuiCardActions sx={{ padding: '16px' }}>{actions}</MuiCardActions>}
    </MuiCard>
  );
};

export default forwardRef(Card);
