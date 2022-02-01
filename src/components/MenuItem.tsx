import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@mui/material';

// Workaround for fixing the unassignable type {button: boolean | undefined} to {button: true | undefined}
export interface MenuItemProps extends MuiMenuItemProps {
  button?: true | undefined;
}

const MenuItem = (props: MenuItemProps): JSX.Element => {
  return (
    <MuiMenuItem
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'rgba(4, 91, 86, 0.08)',
          '&:hover': {
            backgroundColor: 'rgba(4, 91, 86, 0.1)',
          },
        },
      }}
      {...props}
    />
  );
};

export default MenuItem;
