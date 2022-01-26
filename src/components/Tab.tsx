import { Tab as MuiTab, TabProps as MuiTabProps, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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

const Tab = (props: TabProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiTab
      {...props}
      classes={{ disabled: classes.disabled, root: classes.root, wrapped: classes.wrapped }}
    />
  );
};

export default Tab;
