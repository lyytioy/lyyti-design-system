import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@material-ui/core';
import { ElementType } from 'react';

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

export interface TypographyProps
  extends Omit<MuiTypographyProps, 'component' | 'gutterBottom' | 'variant' | 'variantMapping'> {
  variant?: VariantTypes;
  component?: ElementType;
  'data-testid'?: string;
}

const Typography = ({ variant = 'body1', ...props }: TypographyProps): JSX.Element => {
  return <MuiTypography {...props} variant={variant} />;
};

export default Typography;
