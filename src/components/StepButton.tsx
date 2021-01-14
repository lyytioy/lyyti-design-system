import React, { FunctionComponent } from 'react';
import {StepButton as MuiStepButton, StepButtonProps as MuiStepButtonProps} from '@material-ui/core';

export interface StepButtonProps extends MuiStepButtonProps {}

const StepButton: FunctionComponent<StepButtonProps> = props => {

    return (
        <MuiStepButton {...props} />
    )
};

export default StepButton;