import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowTwo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-two_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-two_svg__a"
      d="M17.26 7.5h4.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H8.26a1.5 1.5 0 01-1.5-1.5v-2.991M17.26 12.003h6"
    />,
    <rect
      className="app-window-two_svg__a"
      x={0.76}
      y={3.003}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window-two_svg__a" d="M.76 7.503h16.5" />
  );

export default SvgAppWindowTwo;
