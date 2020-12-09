import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-square_svg__a"
      d="M14.25 23.25h-4.5a1.5 1.5 0 01-1.5-1.5v-3h7.5v3a1.5 1.5 0 01-1.5 1.5zM9.75.75h4.5a1.5 1.5 0 011.5 1.5v3h-7.5v-3a1.5 1.5 0 011.5-1.5z"
    />,
    <rect
      className="smart-watch-square_svg__a"
      x={5.25}
      y={5.25}
      width={13.5}
      height={13.5}
      rx={3}
      ry={3}
    />
  );

export default SvgSmartWatchSquare;
