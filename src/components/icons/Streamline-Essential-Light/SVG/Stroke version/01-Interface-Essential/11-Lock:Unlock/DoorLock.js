import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDoorLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".door-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="door-lock_svg__a"
      d="M6.5 3.53v-2a1 1 0 011-1h13a1 1 0 011 1v21a1 1 0 01-1 1h-13a1 1 0 01-1-1v-3"
    />,
    <path
      className="door-lock_svg__a"
      d="M11.5 16.53a1 1 0 01-1 1h-7a1 1 0 01-1-1v-6a1 1 0 011-1h7a1 1 0 011 1z"
    />,
    <circle className="door-lock_svg__a" cx={6.997} cy={13.593} r={1.25} />,
    <path className="door-lock_svg__a" d="M9.5 8.03a2.5 2.5 0 00-5 0v1.5h5z" />
  );

export default SvgDoorLock;
