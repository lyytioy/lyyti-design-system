import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="monitor-graph_svg__a"
      d="M5 22.004h14M11.5 20.004v2M.5 16.004h23"
    />,
    <rect
      className="monitor-graph_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={18}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="monitor-graph_svg__a"
      d="M5 14.004h14M6 11h2a.5.5 0 01.5.5V14h-3v-2.5A.5.5 0 016 11zM11 8h2a.5.5 0 01.5.5V14h-3V8.5A.5.5 0 0111 8zM16 5h2a.5.5 0 01.5.5V14h-3V5.5A.5.5 0 0116 5z"
    />
  );

export default SvgMonitorGraph;
