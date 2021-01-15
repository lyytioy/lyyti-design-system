import React, { FunctionComponent } from 'react';
import {Paper as MuiPaper, PaperProps as MuiPaperProps} from '@material-ui/core';

export interface PaperProps extends MuiPaperProps {}

const Paper: FunctionComponent<PaperProps> = props => {
    return (
        <MuiPaper {...props} />
    )
};

export default Paper;
