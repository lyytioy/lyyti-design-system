/* eslint-disable react/prop-types */
import { useState, useRef, MouseEvent, KeyboardEvent } from 'react';
import Button, { ButtonProps } from './Button';
import MenuList from './MenuList';
import MenuItem from './MenuItem';
import Paper from './Paper';
import ClickAwayListener from './ClickAwayListener';
import Grow from './Grow';
import Popper from './Popper';

export interface DropdownProps {
  title: string;
  onSelect: (clickedItem: number) => void;
  items: Array<{ id: number; title: string }>;
  buttonProps: ButtonProps;
}

const DropdownMenu = (props: DropdownProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const selectItem = (event: MouseEvent<EventTarget>, id: number) => {
    props.onSelect(id);
    handleClose(event);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        {...props.buttonProps}>
        {props.title}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ position: 'inherit' }}>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {props.items.map((item) => (
                    <MenuItem key={item.id} onClick={(event) => selectItem(event, item.id)}>
                      {item.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default DropdownMenu;
