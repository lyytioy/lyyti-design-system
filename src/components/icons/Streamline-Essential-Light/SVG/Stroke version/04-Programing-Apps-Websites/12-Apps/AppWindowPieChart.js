import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowPieChart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-pie-chart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-pie-chart_svg__a"
      x={0.5}
      y={1.504}
      width={23}
      height={21}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-pie-chart_svg__a"
      d="M.5 6.504h23M4 3.754A.25.25 0 113.75 4 .25.25 0 014 3.754M7 3.754A.25.25 0 116.75 4 .25.25 0 017 3.754M10 3.754A.25.25 0 119.75 4a.25.25 0 01.25-.25"
    />,
    <circle className="app-window-pie-chart_svg__a" cx={8} cy={14.504} r={5} />,
    <path
      className="app-window-pie-chart_svg__a"
      d="M10.821 10.376L8 14.504l3.205 3.837M8 14.504H3M15 10.504h6M15 13.504h6M15 16.504h6"
    />
  );

export default SvgAppWindowPieChart;
