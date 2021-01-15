import React, { FunctionComponent } from 'react';
import {MenuList as MuiMenuList, MenuListProps as MuiMenuListProps, createStyles, makeStyles, Theme} from '@material-ui/core';

const useStyles = makeStyles<Theme>(theme => createStyles({
  root: {
    '& .MuiListItem-button:hover': {
      backgroundColor: theme.palette.primaryActions.main
    }
  },
}))

export interface MenuListProps extends MuiMenuListProps {}

const MenuList: FunctionComponent<MenuListProps> = props => {
    const classes = useStyles();

    return (
        <MuiMenuList {...props} classes={{ root: classes.root }} />
    )
};

export default MenuList;
