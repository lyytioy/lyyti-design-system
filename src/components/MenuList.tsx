import { MenuList as MuiMenuList, MenuListProps as MuiMenuListProps } from '@mui/material';

export type MenuListProps = MuiMenuListProps;

const MenuList = (props: MenuListProps): JSX.Element => {
  return (
    <MuiMenuList
      sx={{ '& .MuiButtonBase-root:hover': { bgcolor: 'primaryStates.hover' } }}
      {...props}
    />
  );
};

export default MenuList;
