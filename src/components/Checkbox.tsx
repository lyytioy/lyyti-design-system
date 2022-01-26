import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[200],
      '&$root$root:hover': {
        backgroundColor: '#045b561a',
      },
    },
  })
);

export type CheckboxProps = MuiCheckboxProps;

const Checkbox = (props: CheckboxProps): JSX.Element => {
  const classes = useStyles();

  return <MuiCheckbox {...props} classes={{ root: classes.root }} />;
};

export default Checkbox;
