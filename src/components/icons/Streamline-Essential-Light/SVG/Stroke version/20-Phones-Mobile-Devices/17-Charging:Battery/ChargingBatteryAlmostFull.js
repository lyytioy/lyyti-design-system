import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryAlmostFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-almost-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-almost-full_svg__a"
      d="M19.5 17.5h-18a1 1 0 01-1-1v-9a1 1 0 011-1h18a1 1 0 011 1v2h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v2a1 1 0 01-1 1zM3.5 8.5v7M6.5 8.5v7M9.5 8.5v7M12.5 8.5v7M15.5 8.5v7"
    />
  );

export default SvgChargingBatteryAlmostFull;
