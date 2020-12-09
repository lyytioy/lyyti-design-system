import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareBrightness = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-brightness_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-brightness_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-brightness_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <circle
      className="smart-watch-square-brightness_svg__a"
      cx={12}
      cy={12}
      r={1.5}
    />,
    <path
      className="smart-watch-square-brightness_svg__a"
      d="M16.875 11.625a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.625 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M7.125 11.625A.375.375 0 107.5 12a.375.375 0 00-.375-.375M9.375 7.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M14.625 15.75a.375.375 0 10.375.375.375.375 0 00-.375-.375M9.375 15.75a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgSmartWatchSquareBrightness;
