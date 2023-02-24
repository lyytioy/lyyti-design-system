/* eslint-disable react/prop-types */
import { ListItemIcon, ListItemText } from '@mui/material';
import { useState, MouseEvent as ReactMouseEvent } from 'react';
import Button, { ButtonProps } from './Button';
import Menu from './Menu';
import MenuItem, { MenuItemProps } from './MenuItem';
import { TypographyProps } from './Typography';

export interface DropdownProps {
  title: string;
  onSelect: (clickedItem: number) => void;
  items: Array<{ id: number; title: string; icon?: any }>;
  buttonProps: ButtonProps;
  subtitle?: string;
  menuItemProps?: MenuItemProps;
  textProps?: TypographyProps;
}

const toHMTLAttribute = (item: string) => {
  return item.replaceAll(' ', '-').toLowerCase();
};

const DropdownMenu = (props: DropdownProps): JSX.Element => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectItem = (_event: ReactMouseEvent<HTMLLIElement, MouseEvent>, id: number) => {
    props.onSelect(id);
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        {...props.buttonProps}
      >
        {props.title}
      </Button>
      <Menu id="menu-list-grow" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {props.subtitle && (
          <ListItemText primaryTypographyProps={{ ...props.textProps }} sx={{ pl: 1.5, pb: 0.5 }}>
            {props.subtitle}
          </ListItemText>
        )}
        {props.items.map((item) => (
          <MenuItem
            key={item.id}
            onClick={(event) => selectItem(event, item.id)}
            data-testid={toHMTLAttribute(item.title)}
            {...props.menuItemProps}
          >
            {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
            <ListItemText primaryTypographyProps={{ ...props.textProps }}>
              {item.title}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
