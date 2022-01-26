import {
  InputAdornment as MuiInputAdornment,
  InputAdornmentProps as MuiInputAdornmentProps,
  Theme,
} from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
    },
  })
);

export type InputAdornmentProps = MuiInputAdornmentProps;

const InputAdornment = (props: InputAdornmentProps): JSX.Element => {
  const classes = useStyles();

  return <MuiInputAdornment {...props} classes={{ root: classes.root }} />;
};

export default InputAdornment;
