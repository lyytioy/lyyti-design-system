import { FunctionComponent, forwardRef } from 'react';
import {
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      '& .MuiListItem-button:hover': {
        backgroundColor: theme.palette.primaryStates.hover,
      },
    },
  })
);

export type MenuListProps = MuiMenuListProps;

const MenuList: FunctionComponent<MenuListProps> = forwardRef((props, ref) => {
  const classes = useStyles();

  return <MuiMenuList ref={ref} {...props} classes={{ root: classes.root }} />;
});

export default MenuList;
