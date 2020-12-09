import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-location_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-location_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-location_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5zM12 10.125a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="smart-watch-square-location_svg__a"
      d="M15.75 10.5c0 1.566-2.145 4.556-3.19 5.745a.742.742 0 01-1.12 0c-1.04-1.189-3.19-4.179-3.19-5.745a3.75 3.75 0 017.5 0z"
    />
  );

export default SvgSmartWatchSquareLocation;
