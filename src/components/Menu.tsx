import React, { FunctionComponent } from 'react';
import {Menu as MuiMenu, MenuProps as MuiMenuProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  list: {
  },
}))

export interface MenuProps extends MuiMenuProps {}

const Menu: FunctionComponent<MenuProps> = props => {
    const classes = useStyles();

    return (
        <MuiMenu {...props} classes={{ list: classes.list }} />
    )
};

export default Menu;
