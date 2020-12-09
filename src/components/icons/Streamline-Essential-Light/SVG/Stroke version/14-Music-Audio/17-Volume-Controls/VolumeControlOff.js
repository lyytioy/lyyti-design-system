import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-off_svg__a"
      d="M9 18.5l2.647 2.646a.5.5 0 00.853-.353V13.5M12.5 7.5V3.207a.5.5 0 00-.853-.353L5.5 9H2a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 002 15h2.5M15.5 12a2.5 2.5 0 01-2.5 2.5h-.5M1.5 22l20-20"
    />
  );

export default SvgVolumeControlOff;
