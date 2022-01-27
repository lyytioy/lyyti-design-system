import { Skeleton as MuiSkeleton } from '@mui/material';
import { SkeletonProps as MuiSkeletonProps } from '@mui/material';

export type SkeletonProps = MuiSkeletonProps;

const Skeleton = ({
  animation = 'wave',
  variant = 'text',
  ...props
}: SkeletonProps): JSX.Element => {
  return (
    <MuiSkeleton
      animation={animation}
      variant={variant}
      sx={{ backgroundColor: 'action.hover' }}
      {...props}
    />
  );
};

export default Skeleton;
