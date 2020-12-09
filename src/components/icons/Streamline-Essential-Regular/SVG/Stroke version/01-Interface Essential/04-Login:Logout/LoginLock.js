import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoginLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".login-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="login-lock_svg__a"
      d="M9.75 23.254h-6a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5V7.5"
    />,
    <path
      className="login-lock_svg__a"
      d="M5.625 11.629A.375.375 0 106 12a.375.375 0 00-.375-.375"
    />,
    <rect
      className="login-lock_svg__a"
      x={12.75}
      y={15.754}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="login-lock_svg__a"
      d="M14.25 15.754v-1.5a3 3 0 013-3 3 3 0 013 3v1.5M17.25 19.129a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgLoginLock;
