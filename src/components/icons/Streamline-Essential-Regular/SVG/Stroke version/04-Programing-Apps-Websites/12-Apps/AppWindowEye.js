import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-eye_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-eye_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-eye_svg__a"
      d="M1.51 6.753h21M17.858 13.807a.732.732 0 010 .894C17.1 15.7 15.015 18 12.01 18s-5.09-2.3-5.848-3.3a.734.734 0 010-.894c.759-.994 2.843-3.3 5.848-3.3s5.09 2.306 5.848 3.301z"
    />,
    <path
      className="app-window-eye_svg__a"
      d="M12.01 13.878a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgAppWindowEye;
