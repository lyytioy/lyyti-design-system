import React, { FunctionComponent } from 'react';
import {Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
    tooltip: {
        fontSize: '12px',
        backgroundColor: theme.palette.grey[400],
        borderRadius: '3px'
    },
    arrow: {
        color: theme.palette.grey[400],
        fontSize: '8px'
    }
}));

export interface TooltipProps extends MuiTooltipProps {}

const Tooltip: FunctionComponent<TooltipProps> = ({ ...props }) => {
    const classes = useStyles();

    return (
        <MuiTooltip {...props} classes={{ arrow: classes.arrow, tooltip: classes.tooltip }}/>
    )
};

export default Tooltip;