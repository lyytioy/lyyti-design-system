import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareGraphLine = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-graph-line_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-graph-line_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-graph-line_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3zM3.5 12.5h3l2.488-4.277a.5.5 0 01.876.08l2.211 6.397a.5.5 0 00.907.027l1.611-3.909a.5.5 0 01.876-.034L16.5 12.5h4"
    />
  );

export default SvgSmartWatchSquareGraphLine;
