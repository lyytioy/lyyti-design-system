import React, { FunctionComponent } from 'react';
import {StepLabel as MuiStepLabel, StepLabelProps as MuiStepLabelProps} from '@material-ui/core';

export interface StepLabelProps extends MuiStepLabelProps {}

const StepLabel: FunctionComponent<StepLabelProps> = props => {

    return (
        <MuiStepLabel {...props} />
    )
};

export default StepLabel;