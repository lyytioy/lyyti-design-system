import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-up_svg__a"
      d="M20.25 9v6M17.25 12h6M13.421 4.658a1.5 1.5 0 00-1.571.142L5.25 9h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3l6.6 4.2a1.5 1.5 0 002.4-1.2V6a1.5 1.5 0 00-.829-1.342zM5.25 9v6"
    />
  );

export default SvgVolumeControlUp;
