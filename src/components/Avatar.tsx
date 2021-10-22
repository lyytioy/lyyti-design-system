import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@material-ui/core';

export interface AvatarProps extends MuiAvatarProps {
  'data-testid'?: string;
}

const Avatar = (props: AvatarProps): JSX.Element => {
  return <MuiAvatar {...props} />;
};

export default Avatar;
