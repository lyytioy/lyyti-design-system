import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-lock-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="password-lock-2_svg__a"
      x={14.25}
      y={10.5}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="password-lock-2_svg__a"
      d="M15.75 10.5V9a3 3 0 013-3 3 3 0 013 3v1.5M18.75 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M4.125 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M7.875 13.875a.375.375 0 10.375.375.374.374 0 00-.375-.375"
    />,
    <path
      className="password-lock-2_svg__a"
      d="M11.25 18h-9a1.5 1.5 0 01-1.5-1.5v-6A1.5 1.5 0 012.25 9h9"
    />
  );

export default SvgPasswordLock2;
