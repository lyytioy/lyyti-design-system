import { FunctionComponent } from 'react';
import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from '@material-ui/core';

export type CardContentProps = MuiCardContentProps;

const CardContent: FunctionComponent<CardContentProps> = (props) => {
  return <MuiCardContent {...props} />;
};

export default CardContent;
