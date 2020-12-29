import React, { FunctionComponent } from 'react';
import {CircularProgress as MuiCircularProgress, CircularProgressProps as MuiCircularProgressProps } from '@material-ui/core';


export interface CircularProgressProps extends MuiCircularProgressProps {}

const CircularProgress: FunctionComponent<CircularProgressProps> = props => {

    return (
        <MuiCircularProgress {...props} />
    )
};

export default CircularProgress;
