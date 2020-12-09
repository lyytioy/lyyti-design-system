import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSmall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-small_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-small_svg__a"
      x={3.76}
      y={5.253}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window-small_svg__a" d="M3.76 9.753h16.5" />
  );

export default SvgAppWindowSmall;
