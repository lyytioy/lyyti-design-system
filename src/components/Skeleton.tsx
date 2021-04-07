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

const Skeleton = ({
  animation = 'wave',
  variant = 'text',
  ...props
}: SkeletonProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MuiSkeleton
      animation={animation}
      variant={variant}
      {...props}
      classes={{ root: classes.root }}
    />
  );
};

export default Skeleton;
