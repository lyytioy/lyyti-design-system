import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCirclePlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-play_svg__a"
      d="M13.96 12.412a.808.808 0 01-1.21-.7V1.559a.808.808 0 011.21-.7l8.883 5.075a.81.81 0 010 1.4zM12 17.031v4.719a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719M3 6.969V2.25A1.5 1.5 0 014.5.75h5.25M13.264 15.515a6.746 6.746 0 11-3.512-9.881"
    />
  );

export default SvgSmartWatchCirclePlay;
