import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowCloud = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-cloud_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-cloud_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-cloud_svg__a"
      d="M1.51 6.753h21M15.01 18.753a3 3 0 100-6c-.085 0-.17 0-.253.012a4.5 4.5 0 10-4.247 5.988z"
    />
  );

export default SvgAppWindowCloud;
