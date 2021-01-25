import React, { FunctionComponent } from 'react';
import {
  Tab as MuiTab,
  TabProps as MuiTabProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    disabled: {
      color: theme.palette.text.disabled,
    },
    root: {
      fontSize: '16px',
    },
    wrapped: {
      fontSize: '13px',
    },
  })
);

export type TabProps = MuiTabProps;

const Tab: FunctionComponent<TabProps> = (props) => {
  const classes = useStyles();

  return (
    <MuiTab
      {...props}
      classes={{ disabled: classes.disabled, root: classes.root, wrapped: classes.wrapped }}
    />
  );
};

export default Tab;
