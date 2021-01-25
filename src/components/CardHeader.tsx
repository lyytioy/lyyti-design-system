import React, { FunctionComponent } from 'react';
import {
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles<Theme>(() =>
  createStyles({
    title: {
      fontSize: '15px',
    },
    subheader: {
      fontSize: '15px',
    },
  })
);

export type CardHeaderProps = MuiCardHeaderProps;

const CardHeader: FunctionComponent<CardHeaderProps> = (props) => {
  const classes = useStyles();

  return (
    <MuiCardHeader {...props} classes={{ title: classes.title, subheader: classes.subheader }} />
  );
};

export default CardHeader;
