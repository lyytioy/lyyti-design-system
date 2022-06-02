import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

// Workaround for fixing the unassignable type {button: boolean | undefined} to {button: true | undefined}
export interface MenuItemProps extends MuiMenuItemProps {
  button?: true;
}

const MenuItem = ({ sx = {}, ...props }: MenuItemProps, ref: Ref<HTMLLIElement>): JSX.Element => {
  return (
    <MuiMenuItem
      ref={ref}
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'rgba(4, 91, 86, 0.08)',
          '&:hover': {
            backgroundColor: 'rgba(4, 91, 86, 0.1)',
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(MenuItem);
