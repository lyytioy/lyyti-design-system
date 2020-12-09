import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlOff1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-off-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-off-1_svg__a"
      d="M16.875 7.125V5.662a.75.75 0 00-.825-.746 8.254 8.254 0 00-6.85 5.209H4.875a.75.75 0 00-.75.75v4.5a.75.75 0 00.75.75h3M10.292 18.087a8.229 8.229 0 005.758 3.247.751.751 0 00.825-.746v-8.744M2.625 21.375l18.75-18.75"
    />
  );

export default SvgVolumeControlOff1;
