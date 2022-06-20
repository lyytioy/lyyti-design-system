/* eslint-disable react/prop-types */
import { useState, MouseEvent as ReactMouseEvent } from 'react';
import Button, { ButtonProps } from './Button';
import Menu from './Menu';
import MenuItem from './MenuItem';

export interface DropdownProps {
  title: string;
  onSelect: (clickedItem: number) => void;
  items: Array<{ id: number; title: string }>;
  buttonProps: ButtonProps;
}

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
        {props.items.map((item) => (
          <MenuItem key={item.id} onClick={(event) => selectItem(event, item.id)} data-testid={`menu-item-${item.title.replaceAll(' ', '-').toLowerCase()}`}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
