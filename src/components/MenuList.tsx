import { MenuList as MuiMenuList, MenuListProps as MuiMenuListProps, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { forwardRef, Ref } from 'react';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      '& .MuiButtonBase-root:hover': {
        backgroundColor: theme.palette.primaryStates.hover,
      },
    },
  })
);

export type MenuListProps = MuiMenuListProps;

const MenuList = (props: MenuListProps, ref: Ref<HTMLUListElement>): JSX.Element => {
  const classes = useStyles();

  return <MuiMenuList {...props} classes={{ root: classes.root }} ref={ref} />;
};

export default forwardRef(MenuList);
