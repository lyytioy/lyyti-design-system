import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowCloud = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-cloud_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-cloud_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-cloud_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.044 15.272a2.78 2.78 0 00-2.928-2.726 3.966 3.966 0 00-3.572-2.19 3.9 3.9 0 00-3.944 3.6 2.1 2.1 0 00-2.556 2c0 2.08 2.261 2.044 2.261 2.044h8.2a2.858 2.858 0 002.539-2.728z"
    />
  );

export default SvgAppWindowCloud;
