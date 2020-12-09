import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleSleep = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-sleep_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-sleep_svg__a"
      d="M14.678 15A6.751 6.751 0 118.63 5.25M4.13 6.97V2.25a1.5 1.5 0 011.5-1.5h4.5"
    />,
    <path
      className="smart-watch-circle-sleep_svg__a"
      d="M13.13 17.03v4.72a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.72"
    />,
    <circle
      className="smart-watch-circle-sleep_svg__a"
      cx={16.88}
      cy={6}
      r={5.25}
    />,
    <path className="smart-watch-circle-sleep_svg__a" d="M15.38 4.5h3l-3 3h3" />
  );

export default SvgSmartWatchCircleSleep;
