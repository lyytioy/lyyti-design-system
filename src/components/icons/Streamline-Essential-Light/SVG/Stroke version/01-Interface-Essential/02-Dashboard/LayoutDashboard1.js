import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutDashboard1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-dashboard-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="layout-dashboard-1_svg__a"
      x={13.5}
      y={11.5}
      width={7}
      height={9}
      rx={1}
      ry={1}
      transform="rotate(180 17 16)"
    />,
    <rect
      className="layout-dashboard-1_svg__a"
      x={13.5}
      y={3.5}
      width={7}
      height={5}
      rx={1}
      ry={1}
      transform="rotate(-180 17 6)"
    />,
    <rect
      className="layout-dashboard-1_svg__a"
      x={3.5}
      y={3.5}
      width={7}
      height={9}
      rx={1}
      ry={1}
    />,
    <rect
      className="layout-dashboard-1_svg__a"
      x={3.5}
      y={15.5}
      width={7}
      height={5}
      rx={1}
      ry={1}
    />,
    <rect
      className="layout-dashboard-1_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgLayoutDashboard1;
