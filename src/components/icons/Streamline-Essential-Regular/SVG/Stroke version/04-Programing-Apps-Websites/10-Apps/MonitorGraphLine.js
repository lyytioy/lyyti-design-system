import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraphLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-graph-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-graph-line_svg__a"
      d="M15 23.253H9l.75-4.5h4.5l.75 4.5zM6.75 23.253h10.5"
    />,
    <rect
      className="monitor-graph-line_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <path
      className="monitor-graph-line_svg__a"
      d="M18.75 5.253h-2.033a1.342 1.342 0 00-.5 2.588l2.064.825a1.342 1.342 0 01-.5 2.587H15.75M17.25 5.253v-.75M17.25 12.003v-.75M.75 11.253l3.97-3.969a.749.749 0 011.06 0l1.94 1.939a.749.749 0 001.06 0l3.97-3.97M.75 15.753h22.5"
    />
  );

export default SvgMonitorGraphLine;
