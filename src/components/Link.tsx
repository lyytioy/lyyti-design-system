import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface LinkProps extends MuiLinkProps {
  'data-testid'?: string;
}

const Link = ({ sx, ...props }: LinkProps, ref: Ref<HTMLAnchorElement>): JSX.Element => {
  return (
    <MuiLink
      ref={ref}
      sx={{
        color: 'primary.light',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        '&.MuiLink-underlineHover': {
          '&:hover': {
            color: 'primary.main',
            textDecorationColor: 'sky.100',
          },
          '&:active': {
            color: 'primary.light',
          },
        },
        '&.MuiLink-underlineAlways': {
          textDecorationColor: 'sky.100',
          '&:hover': {
            color: 'primary.main',
          },
          '&:active': {
            color: 'primary.light',
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Link);
