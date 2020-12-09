import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMoveLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-move-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-move-left_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-move-left_svg__a"
      d="M1.51 6.753h21M15.01 6.753v1.5M15.01 11.253v1.5M15.01 15.753v1.5M15.01 20.253v1.5M12.01 14.253h-6M9.01 11.253l-3 3 3 3"
    />
  );

export default SvgAppWindowMoveLeft;
