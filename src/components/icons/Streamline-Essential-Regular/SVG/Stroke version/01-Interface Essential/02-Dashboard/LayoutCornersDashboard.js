import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutCornersDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-corners-dashboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="layout-corners-dashboard_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="layout-corners-dashboard_svg__a"
      d="M8.087.753L.75 8.09M23.25 15.917l-7.337 7.336M15.913.753L23.25 8.09M.75 15.917l7.337 7.336"
    />
  );

export default SvgLayoutCornersDashboard;
