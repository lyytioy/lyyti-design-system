import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMoveDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-move-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-move-down_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-move-down_svg__a"
      d="M1.51 6.753h21M1.51 11.253h1.5M6.01 11.253h1.5M16.51 11.253h1.5M22.51 11.253h-1.5M12.01 11.253v7.5M15.01 15.753l-3 3-3-3"
    />
  );

export default SvgAppWindowMoveDown;
