import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGraphStatsAscend = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".graph-stats-ascend_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="graph-stats-ascend_svg__a" d="M23.25 12.75V6H16.5" />,
    <path
      className="graph-stats-ascend_svg__a"
      d="M23.25 6l-7.939 7.939a1.5 1.5 0 01-2.122 0l-3.128-3.128a1.5 1.5 0 00-2.122 0L.75 18"
    />
  );

export default SvgGraphStatsAscend;
