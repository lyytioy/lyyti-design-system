import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutCornersDashboard1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".layout-corners-dashboard-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="layout-corners-dashboard-1_svg__a"
      cx={5}
      cy={5}
      r={4.5}
    />,
    <circle
      className="layout-corners-dashboard-1_svg__a"
      cx={19}
      cy={5}
      r={4.5}
    />,
    <circle
      className="layout-corners-dashboard-1_svg__a"
      cx={5}
      cy={19}
      r={4.5}
    />,
    <circle
      className="layout-corners-dashboard-1_svg__a"
      cx={19}
      cy={19}
      r={4.5}
    />
  );

export default SvgLayoutCornersDashboard1;
