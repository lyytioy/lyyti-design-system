import { Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Skeleton as MuiSkeleton } from '@mui/material';
import { SkeletonProps as MuiSkeletonProps } from '@mui/material';

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
