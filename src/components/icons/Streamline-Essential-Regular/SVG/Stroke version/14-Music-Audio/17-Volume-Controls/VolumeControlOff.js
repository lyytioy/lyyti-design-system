import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-off_svg__a"
      d="M10.816 16.735l3.284 2.09a1.5 1.5 0 002.4-1.2v-5.25M16.5 5.625a1.5 1.5 0 00-2.4-1.2l-6.6 4.2h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h.625M3 19.875l18-15"
    />
  );

export default SvgVolumeControlOff;
