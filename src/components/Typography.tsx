import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';

export type VariantTypes =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'srOnly'
  | 'inherit';

export type TypographyProps = { variant: VariantTypes } & Omit<MuiTypographyProps, 'variant'>;

const Typography = ({ variant = 'body1', ...props }: TypographyProps): JSX.Element => {
  return <MuiTypography {...props} variant={variant} />;
};

export default Typography;
