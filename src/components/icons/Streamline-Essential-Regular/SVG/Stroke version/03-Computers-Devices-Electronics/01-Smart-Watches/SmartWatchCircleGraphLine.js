import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleGraphLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-graph-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-circle-graph-line_svg__a"
      x={11.25}
      y={0.75}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smart-watch-circle-graph-line_svg__a"
      d="M11.25 5.25h3l.75-1.5 2.25 3.75 1.5-4.5 1.5 2.25h3M3 6.969V2.25A1.5 1.5 0 014.5.75h3.75M12 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719"
    />,
    <path
      className="smart-watch-circle-graph-line_svg__a"
      d="M8.25 5.325a6.851 6.851 0 00-.75-.075 6.75 6.75 0 106.674 7.5"
    />
  );

export default SvgSmartWatchCircleGraphLine;
