import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';

export interface LinkProps extends MuiLinkProps {
  'data-testid'?: string;
}

const Link = ({ sx, ...props }: LinkProps): JSX.Element => {
  return (
    <MuiLink
      {...props}
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
        ...sx
      }}
    />
  );
};

export default Link;
