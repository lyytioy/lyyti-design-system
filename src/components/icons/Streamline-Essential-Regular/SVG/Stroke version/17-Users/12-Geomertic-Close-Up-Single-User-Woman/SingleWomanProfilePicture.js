import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanProfilePicture = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-profile-picture_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-profile-picture_svg__cls-1"
      x={2.25}
      y={0.75}
      width={19.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-woman-profile-picture_svg__cls-1"
      d="M17.463 13.717a5.908 5.908 0 01-.86-3.272V9.107a4.6 4.6 0 10-9.206 0v1.338a5.908 5.908 0 01-.86 3.272"
    />,
    <path
      className="single-woman-profile-picture_svg__cls-1"
      d="M7.4 9.866a6.1 6.1 0 004.6-2.11 6.1 6.1 0 004.6 2.11M16.057 9.842a4.061 4.061 0 01-8.114 0M18.75 19.823a7.63 7.63 0 00-13.5 0"
    />
  );

export default SvgSingleWomanProfilePicture;
