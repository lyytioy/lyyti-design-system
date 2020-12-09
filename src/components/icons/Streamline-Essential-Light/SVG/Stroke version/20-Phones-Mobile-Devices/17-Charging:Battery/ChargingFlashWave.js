import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlashWave = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash-wave_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash-wave_svg__a"
      d="M6 7.5a4.45 4.45 0 000 8M4.5 5.5a6.5 6.5 0 000 12M18 7.5a4.45 4.45 0 010 8M19.5 5.5a6.5 6.5 0 010 12M13.5 5l-5.911 7.382a.376.376 0 00.286.618H10.5v6l5.911-7.382a.376.376 0 00-.286-.618H13.5z"
    />
  );

export default SvgChargingFlashWave;
