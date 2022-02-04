import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {
  'data-testid'?: string;
}

const Link = (props: LinkProps): JSX.Element => {
  return (
    <MuiLink
      sx={{
        color: 'primary.light',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        '&.MuiLink-underlineHover': {
          '&:hover': {
            color: 'primary.main',
            textDecorationColor: '#blue.100',
          },
          '&:active': {
            color: 'primary.light',
          },
        },
        '&.MuiLink-underlineAlways': {
          textDecorationColor: 'blue.100',
          '&:hover': {
            color: 'primary.main',
          },
          '&:active': {
            color: 'primary.light',
          },
        },
      }}
      {...props}
    />
  );
};

export default Link;
