import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryLow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-low_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="charging-battery-low_svg__a"
      x={2.556}
      y={8.5}
      width={4}
      height={7}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="charging-battery-low_svg__a"
      d="M20.556 9.5v-2a1 1 0 00-1-1h-18a1 1 0 00-1 1v9a1 1 0 001 1h18a1 1 0 001-1v-2h2a1 1 0 001-1v-3a1 1 0 00-1-1z"
    />
  );

export default SvgChargingBatteryLow;
