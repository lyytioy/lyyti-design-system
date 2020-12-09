import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-star_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-star_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5zM11.564 7.469a.489.489 0 01.872 0l1.012 2.042a.485.485 0 00.365.263l2.273.328a.484.484 0 01.39.325.474.474 0 01-.121.489l-1.65 1.6a.476.476 0 00-.138.421l.389 2.255a.475.475 0 01-.194.468.49.49 0 01-.511.034l-2.024-1.058a.486.486 0 00-.454 0l-2.024 1.058a.49.49 0 01-.511-.034.475.475 0 01-.194-.468l.389-2.255a.476.476 0 00-.138-.421l-1.65-1.6a.474.474 0 01-.121-.489.483.483 0 01.39-.325l2.272-.328a.485.485 0 00.366-.263z"
    />
  );

export default SvgSmartWatchSquareStar;
