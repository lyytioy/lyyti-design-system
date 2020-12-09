import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlMedium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-medium_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-medium_svg__a"
      d="M15 4.658a1.5 1.5 0 00-1.571.142L6.828 9h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3l6.6 4.2a1.5 1.5 0 002.4-1.2V6A1.5 1.5 0 0015 4.658zM20.328 15a3.509 3.509 0 000-5.523M6.828 9v6"
    />
  );

export default SvgVolumeControlMedium;
