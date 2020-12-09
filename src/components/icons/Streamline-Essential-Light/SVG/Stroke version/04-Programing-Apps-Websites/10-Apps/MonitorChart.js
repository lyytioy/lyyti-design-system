import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorChart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-chart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-chart_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23"
    />,
    <circle className="monitor-chart_svg__a" cx={8.5} cy={9.004} r={5} />,
    <path
      className="monitor-chart_svg__a"
      d="M11.327 4.88L8.5 9.004l3.205 3.836M8.5 9.004h-5M16.5 5.004h4M16.5 8.004h4M16.5 11.004h4"
    />,
    <rect
      className="monitor-chart_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMonitorChart;
