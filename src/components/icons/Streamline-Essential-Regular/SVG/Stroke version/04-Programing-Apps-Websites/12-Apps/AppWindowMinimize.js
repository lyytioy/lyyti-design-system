import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMinimize = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-minimize_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-minimize_svg__a"
      d="M17.26 12.753v-10.5a1.5 1.5 0 00-1.5-1.5H2.26a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h4.5M.76 5.253h16.5"
    />,
    <rect
      className="app-window-minimize_svg__a"
      x={14.26}
      y={20.253}
      width={9}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="app-window-minimize_svg__a"
      d="M7.135 10.128l7.125 7.125M14.26 12.753v4.5h-4.5"
    />
  );

export default SvgAppWindowMinimize;
