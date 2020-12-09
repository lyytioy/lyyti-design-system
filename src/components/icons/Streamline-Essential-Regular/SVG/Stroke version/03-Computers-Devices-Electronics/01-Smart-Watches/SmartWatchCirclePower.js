import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCirclePower = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-power_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-power_svg__a"
      d="M12 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719M17.25.75v5.143M21.493 3.257a6 6 0 11-8.486 0M10.5.75h-6A1.5 1.5 0 003 2.25v4.719"
    />,
    <path
      className="smart-watch-circle-power_svg__a"
      d="M8.519 5.353A6.714 6.714 0 007.5 5.25a6.75 6.75 0 105.724 10.291"
    />
  );

export default SvgSmartWatchCirclePower;
