import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-low_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-low_svg__a"
      d="M17.921 4.658a1.5 1.5 0 00-1.571.142L9.75 9h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3l6.6 4.2a1.5 1.5 0 002.4-1.2V6a1.5 1.5 0 00-.829-1.342zM9.75 9v6"
    />
  );

export default SvgVolumeControlLow;
