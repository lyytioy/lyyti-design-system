import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-flash_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-flash_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3zM9 13.5h1.5v4l4.88-6.175A.5.5 0 0015 10.5h-1.5v-4l-4.88 6.175A.5.5 0 009 13.5z"
    />
  );

export default SvgSmartWatchSquareFlash;
