import {
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
} from '@material-ui/core';

export type CardContentProps = MuiCardContentProps;

const CardContent = (props: CardContentProps): JSX.Element => {
  return <MuiCardContent {...props} />;
};

export default CardContent;
