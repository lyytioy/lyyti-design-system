import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-graph_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-graph_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-graph_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5zM6.75 15.75h10.5M12 12v3.75M15 8.25v7.5M9 9.75v6"
    />
  );

export default SvgSmartWatchSquareGraph;
