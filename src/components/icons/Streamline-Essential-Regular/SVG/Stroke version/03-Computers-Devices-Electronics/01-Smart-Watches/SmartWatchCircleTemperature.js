import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleTemperature = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-temperature_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-temperature_svg__a"
      d="M9.372 2.25h-2.25a3 3 0 00-3 3v1.5a3 3 0 003 3h2.25M2.247.75a.375.375 0 10.375.375.374.374 0 00-.375-.375M10.872 17.031v4.719a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-4.719M19.872 6.97V2.25a1.5 1.5 0 00-1.5-1.5h-6M8.7 12.75a6.78 6.78 0 103.675-6.767"
    />
  );

export default SvgSmartWatchCircleTemperature;
