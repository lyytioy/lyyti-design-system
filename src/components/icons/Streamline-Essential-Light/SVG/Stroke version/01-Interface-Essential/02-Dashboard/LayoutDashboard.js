import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutDashboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-dashboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-dashboard_svg__a"
      x={0.5}
      y={16.5}
      width={10}
      height={7}
      rx={1}
      ry={1}
    />,
    <rect
      className="layout-dashboard_svg__a"
      x={13.5}
      y={10.5}
      width={10}
      height={13}
      rx={1}
      ry={1}
      transform="rotate(180 18.5 17)"
    />,
    <rect
      className="layout-dashboard_svg__a"
      x={13.5}
      y={0.5}
      width={10}
      height={7}
      rx={1}
      ry={1}
      transform="rotate(180 18.5 4)"
    />,
    <rect
      className="layout-dashboard_svg__a"
      x={0.5}
      y={0.5}
      width={10}
      height={13}
      rx={1}
      ry={1}
    />
  );

export default SvgLayoutDashboard;
