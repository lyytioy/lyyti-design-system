import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowPieChart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-pie-chart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-pie-chart_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window-pie-chart_svg__a" d="M1.51 6.753h21" />,
    <circle
      className="app-window-pie-chart_svg__a"
      cx={9.01}
      cy={14.253}
      r={4.5}
    />,
    <path
      className="app-window-pie-chart_svg__a"
      d="M9.01 9.753v4.5l3.182 3.182M16.51 11.253h3M16.51 14.253h3M16.51 17.253h3"
    />
  );

export default SvgAppWindowPieChart;
