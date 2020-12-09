import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-empty_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-empty_svg__a"
      d="M15.751 17.251H18a1.5 1.5 0 001.5-1.5v-1.5H21a1.5 1.5 0 001.5-1.5v-1.5a1.5 1.5 0 00-1.5-1.5h-1.5v-1.5a1.5 1.5 0 00-1.5-1.5h-2.25M6 6.751H3a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h3M12.001 6.001l-6 6.75h3v5.25l6-6.75h-3v-5.25z"
    />
  );

export default SvgChargingBatteryEmpty;
