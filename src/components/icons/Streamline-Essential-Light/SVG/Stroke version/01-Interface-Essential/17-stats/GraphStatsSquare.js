import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStatsSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".graph-stats-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="graph-stats-square_svg__a"
      x={0.498}
      y={0.501}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="graph-stats-square_svg__a"
      d="M2.5 13.5h2.374c2.206 0 2.015-1.867 3.633-9.632a.5.5 0 01.979 0L12.548 18.8a.5.5 0 00.976.017l2.109-8.787a.5.5 0 01.951-.069c.743 1.858 1.04 3.541 2.77 3.541H21.5"
    />
  );

export default SvgGraphStatsSquare;
