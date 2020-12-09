import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window_svg__a" d="M1.51 6.753h21" />
  );

export default SvgAppWindow;
