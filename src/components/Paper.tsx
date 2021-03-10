import { FunctionComponent } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@material-ui/core';

export type PaperProps = MuiPaperProps;

const Paper: FunctionComponent<PaperProps> = (props) => {
  return <MuiPaper {...props} />;
};

export default Paper;
