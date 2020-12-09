import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-graph_svg__a"
      d="M15 23.253H9l.75-4.5h4.5l.75 4.5zM6.75 23.253h10.5"
    />,
    <rect
      className="monitor-graph_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-graph_svg__a"
      d="M5.25 5.253v9M14.25 5.253h4.5v9h-4.5zM9.75 8.253h4.5v6h-4.5zM5.25 11.253h4.5v3h-4.5z"
    />
  );

export default SvgMonitorGraph;
