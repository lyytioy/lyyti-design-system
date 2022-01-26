import { InputLabel as MuiInputLabel, InputLabelProps as MuiInputLabelProps, Theme } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[400],
      letterSpacing: '0.15px',
    },
  })
);

export type InputLabelProps = MuiInputLabelProps;

const InputLabel = (props: InputLabelProps): JSX.Element => {
  const classes = useStyles();

  return <MuiInputLabel {...props} classes={{ root: classes.root }} />;
};

export default InputLabel;
