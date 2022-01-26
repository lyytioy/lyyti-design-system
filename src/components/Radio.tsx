import { Radio as MuiRadio, RadioProps as MuiRadioProps, Theme } from '@mui/material';

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

export type RadioProps = MuiRadioProps;

const Radio = (props: RadioProps): JSX.Element => {
  const classes = useStyles();

  return <MuiRadio {...props} classes={{ root: classes.root }} />;
};

export default Radio;
