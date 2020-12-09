import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-home_svg__a"
      d="M12 17.03v4.72a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.72M10.5.75h-6A1.5 1.5 0 003 2.25v4.72M12.75 3.948v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="smart-watch-circle-home_svg__a"
      d="M11.25 5.26l4.518-3.953a2.249 2.249 0 012.964 0L23.25 5.26M18.75 11.25h-3v-3a1.5 1.5 0 013 0zM8.25 5.325a6.851 6.851 0 00-.75-.075 6.75 6.75 0 106.337 9"
    />
  );

export default SvgSmartWatchCircleHome;
