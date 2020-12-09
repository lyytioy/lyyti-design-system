import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryLow2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-low-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-low-2_svg__a"
      d="M19.5 18h-18a1 1 0 01-1-1V8a1 1 0 011-1h18a1 1 0 011 1v2h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v2a1 1 0 01-1 1zM3.5 9v7M6.5 9v7"
    />
  );

export default SvgChargingBatteryLow2;
