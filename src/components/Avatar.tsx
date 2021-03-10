import { FunctionComponent } from 'react';
import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@material-ui/core';

export type AvatarProps = MuiAvatarProps;

const Avatar: FunctionComponent<AvatarProps> = (props) => {
  return <MuiAvatar {...props} />;
};

export default Avatar;
