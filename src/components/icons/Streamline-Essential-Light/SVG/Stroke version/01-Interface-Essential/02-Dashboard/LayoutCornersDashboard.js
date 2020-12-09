import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutCornersDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-corners-dashboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="layout-corners-dashboard_svg__a"
      d="M8 .5L.5 8M23.5 16L16 23.5M16 .5L23.5 8M.5 16L8 23.5"
    />,
    <rect
      className="layout-corners-dashboard_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgLayoutCornersDashboard;
