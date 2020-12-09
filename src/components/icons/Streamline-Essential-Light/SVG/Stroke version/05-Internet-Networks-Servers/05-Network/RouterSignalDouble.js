import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRouterSignalDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".router-signal-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="router-signal-double_svg__a"
      d="M23.5 16.5a2 2 0 00-2-2h-19a2 2 0 00-2 2v2a2 2 0 002 2h19a2 2 0 002-2zM3.5 17v.5M6.5 17v.5M9.5 17v.5M18.5 14.5V9M23.214 3.428a8.495 8.495 0 00-9.428 0M22.105 5.092a6.5 6.5 0 00-7.21 0M21 6.756a4.5 4.5 0 00-4.993 0M5.5 14.5V9M10.214 3.428a8.495 8.495 0 00-9.428 0M9.105 5.092a6.5 6.5 0 00-7.21 0M8 6.756a4.5 4.5 0 00-5 0"
    />,
    <rect
      className="router-signal-double_svg__a"
      x={13}
      y={16.5}
      width={7.5}
      height={2}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="router-signal-double_svg__a"
      d="M3.5 20.5V22M20.5 20.5V22"
    />
  );

export default SvgRouterSignalDouble;
