import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-wifi_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-wifi_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />,
    <circle
      className="smart-watch-square-wifi_svg__a"
      cx={12}
      cy={15.999}
      r={1.5}
    />,
    <path
      className="smart-watch-square-wifi_svg__a"
      d="M15.326 12.619a5.5 5.5 0 00-6.653 0M18 9.5a10.007 10.007 0 00-12 0"
    />
  );

export default SvgSmartWatchSquareWifi;
