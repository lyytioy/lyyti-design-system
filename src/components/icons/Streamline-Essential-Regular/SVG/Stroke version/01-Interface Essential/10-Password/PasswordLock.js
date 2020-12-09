import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".password-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="password-lock_svg__a"
      d="M6 10.875a.375.375 0 10.375.375.374.374 0 00-.375-.375M9.75 6.75V4.5A3.761 3.761 0 006 .75 3.76 3.76 0 002.25 4.5v2.25M17.25 20.25h3"
    />,
    <rect
      className="password-lock_svg__a"
      x={8.25}
      y={15.75}
      width={15}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="password-lock_svg__a"
      d="M14.25 18.75v1.5M11.25 18.75v1.5M11.25 12.75v-4.5a1.5 1.5 0 00-1.5-1.5h-7.5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h3"
    />
  );

export default SvgPasswordLock;
