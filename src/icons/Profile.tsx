import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Profile = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.single-neutral-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <circle className="single-neutral-circle_svg__cls-1" cx={12} cy={9.75} r={5.25} />,
    <path
      className="single-neutral-circle_svg__cls-1"
      d="M18.913 20.876a9.746 9.746 0 00-13.826 0"
    />,
    <circle className="single-neutral-circle_svg__cls-1" cx={12} cy={12} r={11.25} />
  );

export default Profile;
