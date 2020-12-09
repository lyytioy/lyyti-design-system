import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-lock_svg__a"
      d="M22.51 9.753v-7.5a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h7.5M1.51 5.253h21"
    />,
    <rect
      className="app-window-lock_svg__a"
      x={13.509}
      y={15.753}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-lock_svg__a"
      d="M18.009 11.253a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.009 19.158a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgAppWindowLock;
