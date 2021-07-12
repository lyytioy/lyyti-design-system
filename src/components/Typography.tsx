import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';
import React from 'react';

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
  | 'inherit';

export type TypographyProps = { variant: VariantTypes; component?: React.ElementType } & Omit<
  MuiTypographyProps,
  'variant' | 'component'
>;

const Typography = ({ variant = 'body1', ...props }: TypographyProps): JSX.Element => {
  return <MuiTypography {...props} variant={variant} />;
};

export default Typography;
