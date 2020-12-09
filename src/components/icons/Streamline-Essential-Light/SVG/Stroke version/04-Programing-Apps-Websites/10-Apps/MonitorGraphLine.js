import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraphLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-graph-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-graph-line_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23"
    />,
    <rect
      className="monitor-graph-line_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-graph-line_svg__a"
      d="M.5 13.004l5.75-5.75 4 4L14 7.504M19.125 5.504v-1M20.625 5.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.825a1.342 1.342 0 01-.5 2.588h-2.031M19.125 12.504v-1"
    />
  );

export default SvgMonitorGraphLine;
