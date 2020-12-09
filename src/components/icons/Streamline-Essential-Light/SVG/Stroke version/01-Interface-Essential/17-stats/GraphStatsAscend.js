import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStatsAscend = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".graph-stats-ascend_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="graph-stats-ascend_svg__a"
      d="M1.25 18.25L8.586 10a1.042 1.042 0 011.432-.107l4.464 3.72a1.038 1.038 0 001.43-.11L22.75 5.75"
    />,
    <path className="graph-stats-ascend_svg__a" d="M15.812 5.75h6.938v5.979" />
  );

export default SvgGraphStatsAscend;
