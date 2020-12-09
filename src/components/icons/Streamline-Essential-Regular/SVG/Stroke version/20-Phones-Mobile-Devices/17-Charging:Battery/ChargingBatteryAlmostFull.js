import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryAlmostFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-almost-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-almost-full_svg__a"
      d="M19.5 9.75V9a2.25 2.25 0 00-2.25-2.25H3.75A2.25 2.25 0 001.5 9v6a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0019.5 15v-.75H21a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-1.5-1.5zM6 9.75v4.5M10.5 9.75v4.5M15 9.75v4.5"
    />
  );

export default SvgChargingBatteryAlmostFull;
