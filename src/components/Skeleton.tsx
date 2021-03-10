import { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { Skeleton as MuiSkeleton, SkeletonProps as MuiSkeletonProps } from '@material-ui/lab';

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.action.hover,
    },
  })
);

export type SkeletonProps = MuiSkeletonProps;

const Skeleton: FunctionComponent<SkeletonProps> = (props) => {
  const classes = useStyles();

  return <MuiSkeleton {...props} classes={{ root: classes.root }} />;
};

export default Skeleton;
