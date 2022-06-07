import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export interface AvatarProps extends MuiAvatarProps {
  'data-testid'?: string;
}

const Avatar = (props: AvatarProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return <MuiAvatar ref={ref} {...props} />;
};

export default forwardRef(Avatar);
