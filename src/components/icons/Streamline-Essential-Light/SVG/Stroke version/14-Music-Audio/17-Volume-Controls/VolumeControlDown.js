import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-down_svg__a"
      d="M23.5 12h-8M5.5 9H2a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 002 15h3.5l6.146 6.146a.5.5 0 00.854-.353V3.207a.5.5 0 00-.854-.353z"
    />
  );

export default SvgVolumeControlDown;
