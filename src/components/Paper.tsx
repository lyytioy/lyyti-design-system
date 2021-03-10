import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@material-ui/core';

export type PaperProps = MuiPaperProps;

const Paper = (props: PaperProps): JSX.Element => {
  return <MuiPaper {...props} />;
};

export default Paper;
