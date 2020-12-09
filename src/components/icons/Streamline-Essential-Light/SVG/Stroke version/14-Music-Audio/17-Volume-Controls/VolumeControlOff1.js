import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlOff1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-off-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-off-1_svg__a"
      d="M13.5 7.5V5.207a.5.5 0 00-.853-.353L8.5 9H6a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 006 15M13.5 14.5v4.293a.5.5 0 01-.853.353L11 17.5M4.121 20.379L20.377 4.124"
    />,
    <circle className="volume-control-off-1_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgVolumeControlOff1;
