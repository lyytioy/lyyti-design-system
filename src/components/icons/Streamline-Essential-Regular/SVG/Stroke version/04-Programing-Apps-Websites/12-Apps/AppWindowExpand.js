import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-expand_svg__a"
      d="M6.76 11.253v-9a1.5 1.5 0 011.5-1.5h13.5a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-4.5M6.76 5.253h16.5"
    />,
    <rect
      className="app-window-expand_svg__a"
      x={0.76}
      y={20.253}
      width={9}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="app-window-expand_svg__a"
      d="M7.135 16.878l7.125-7.125M9.76 9.753h4.5v4.5"
    />
  );

export default SvgAppWindowExpand;
