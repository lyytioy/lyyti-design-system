import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';

export type MenuProps = MuiMenuProps;

const Menu = (props: MenuProps): JSX.Element => {
  return (
    <MuiMenu
      sx={{ '& .MuiButtonBase-root:hover': { bgcolor: 'primaryStates.hover' } }}
      {...props}
    />
  );
};

export default Menu;
