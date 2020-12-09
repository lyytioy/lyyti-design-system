import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMultiple = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-multiple_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-multiple_svg__a"
      x={0.76}
      y={2.253}
      width={16.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-multiple_svg__a"
      d="M.76 6.753h16.5M20.26 6.753v10.5a1.5 1.5 0 01-1.5 1.5H5.26"
    />,
    <path
      className="app-window-multiple_svg__a"
      d="M23.26 9.753v10.5a1.5 1.5 0 01-1.5 1.5H8.26"
    />
  );

export default SvgAppWindowMultiple;
