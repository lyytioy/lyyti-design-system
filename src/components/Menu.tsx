import { Menu as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type MenuProps = MuiMenuProps;

const Menu = ({ sx = {}, ...props }: MenuProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <MuiMenu
      ref={ref}
      sx={{ '& .MuiButtonBase-root:hover': { bgcolor: 'primaryStates.hover' }, ...sx }}
      {...props}
    />
  );
};

export default forwardRef(Menu);
