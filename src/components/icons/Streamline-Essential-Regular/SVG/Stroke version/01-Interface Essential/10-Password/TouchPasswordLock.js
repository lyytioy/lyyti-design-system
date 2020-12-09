import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTouchPasswordLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".touch-password-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="touch-password-lock_svg__a"
      d="M3 12h-.75a1.5 1.5 0 01-1.5-1.5V3a1.5 1.5 0 011.5-1.5h10.5M5.25 22.5l-2.764-3.11a1.557 1.557 0 112.327-2.069L6.75 19.5v-9a1.5 1.5 0 013 0v6.75h1.5a4.5 4.5 0 014.5 4.5v.75"
    />,
    <rect
      className="touch-password-lock_svg__a"
      x={14.25}
      y={6}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="touch-password-lock_svg__a"
      d="M18.75 1.5a3 3 0 00-3 3V6h6V4.5a3 3 0 00-3-3zM18.75 9.4a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgTouchPasswordLock;
