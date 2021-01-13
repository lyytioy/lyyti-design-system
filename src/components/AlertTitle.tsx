import React, { FunctionComponent } from 'react';
import {AlertTitle as MuiAlertTitle, AlertTitleProps as MuiAlertTitleProps} from '@material-ui/lab';

export interface AlertTitleProps extends MuiAlertTitleProps {}

const AlertTitle: FunctionComponent<AlertTitleProps> = props => {

    return (
        <MuiAlertTitle {...props} />
    )
};

export default AlertTitle;
