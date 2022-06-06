import { Skeleton as MuiSkeleton, SkeletonProps as MuiSkeletonProps } from '@mui/material';

export type SkeletonProps = MuiSkeletonProps;

const Skeleton = ({
  animation = 'wave',
  variant = 'text',
  sx = {},
  ...props
}: SkeletonProps): JSX.Element => {
  return (
    <MuiSkeleton
      animation={animation}
      variant={variant}
      sx={{ backgroundColor: 'action.hover', ...sx }}
      {...props}
    />
  );
};

export default Skeleton;
