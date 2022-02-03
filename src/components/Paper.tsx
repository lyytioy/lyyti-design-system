import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export type PaperProps = MuiPaperProps;

const Paper = (props: PaperProps): JSX.Element => {
  return <MuiPaper {...props} />;
};

export default Paper;
