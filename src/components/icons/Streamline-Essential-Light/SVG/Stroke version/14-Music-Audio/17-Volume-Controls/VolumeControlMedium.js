import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlMedium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-medium_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-medium_svg__a"
      d="M7.011 9h-3.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.5l6.147 6.146a.5.5 0 00.853-.353V3.207a.5.5 0 00-.853-.353zM19.011 6a7.535 7.535 0 010 12M17.011 8.5c2.678 1.947 2.669 5.06 0 7"
    />
  );

export default SvgVolumeControlMedium;
