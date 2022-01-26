import {
  FormControlLabel as MuiFormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
  Theme,
} from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      color: theme.palette.grey[400],
      letterSpacing: '0.15px',
    },
    label: {
      '&$disabled': {
        color: '#B8BCBF',
      },
    },
    disabled: {},
  })
);

export type FormControlLabelProps = MuiFormControlLabelProps;

const FormControlLabel = (props: FormControlLabelProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiFormControlLabel
      {...props}
      classes={{ root: classes.root, label: classes.label, disabled: classes.disabled }}
    />
  );
};

export default FormControlLabel;
