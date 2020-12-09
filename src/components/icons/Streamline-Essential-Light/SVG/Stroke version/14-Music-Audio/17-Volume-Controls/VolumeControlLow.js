import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-low_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-low_svg__a"
      d="M5.5 9H2a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 002 15h3.5l6.147 6.146a.5.5 0 00.853-.353V3.207a.5.5 0 00-.853-.353zM15.5 8.5c2.677 1.947 2.669 5.06 0 7"
    />
  );

export default SvgVolumeControlLow;
