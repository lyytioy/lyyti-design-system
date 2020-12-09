import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquarePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-square-play_svg__a"
      d="M10.307 15.852a.54.54 0 01-.807-.468V8.616a.54.54 0 01.807-.468l5.921 3.384a.539.539 0 010 .936z"
    />,
    <rect
      className="smart-watch-square-play_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-play_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />
  );

export default SvgSmartWatchSquarePlay;
