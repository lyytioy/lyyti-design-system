import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@material-ui/core';

export type AvatarProps = MuiAvatarProps;

const Avatar = (props: AvatarProps): JSX.Element => {
  return <MuiAvatar {...props} />;
};

export default Avatar;
