import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStatsCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".graph-stats-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="graph-stats-circle_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="graph-stats-circle_svg__a"
      d="M3.75 12.75h3L9.01 7.1a.749.749 0 011.4.029l3.292 9.325a.75.75 0 001.358.123l2.19-3.827h3"
    />
  );

export default SvgGraphStatsCircle;
