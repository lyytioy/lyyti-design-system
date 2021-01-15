import React, { FunctionComponent } from 'react';
import {MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps} from '@material-ui/core';

export interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem: FunctionComponent<MenuItemProps> = props => {
    return (
        <MuiMenuItem {...props} />
    )
};

export default MenuItem;
