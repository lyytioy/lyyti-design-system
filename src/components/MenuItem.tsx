import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@mui/material';

// Workaround for fixing the unassignable type {button: boolean | undefined} to {button: true | undefined}
export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined;
}

const MenuItem = (props: MenuItemProps): JSX.Element => {
  return <MuiMenuItem {...props} />;
};

export default MenuItem;
