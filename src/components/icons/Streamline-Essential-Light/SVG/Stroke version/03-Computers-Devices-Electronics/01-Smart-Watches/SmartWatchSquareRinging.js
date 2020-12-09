import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareRinging = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-ringing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-square-ringing_svg__a"
      d="M13.5 12.108v3.106a1.459 1.459 0 001.286 1.286h1.428a1.384 1.384 0 001.286-1.287v-1.286c0-2.569-11-2.569-11 0v1.287A1.383 1.383 0 007.786 16.5h1.428a1.383 1.383 0 001.286-1.286V12.1M12 7.5V9M15.125 8.182L14.5 9.545M8.875 8.182L9.5 9.545"
    />,
    <rect
      className="smart-watch-square-ringing_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-ringing_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />
  );

export default SvgSmartWatchSquareRinging;
