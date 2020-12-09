import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-empty_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-empty_svg__a"
      d="M15.5 17.75h4a1 1 0 001-1v-2h2a1 1 0 001-1v-3a1 1 0 00-1-1h-2v-2a1 1 0 00-1-1H15M8.5 6.75h-7a1 1 0 00-1 1v9a1 1 0 001 1H9"
    />,
    <path
      className="charging-battery-empty_svg__a"
      d="M12.5 6.25l-4 7.5h3v4.5l4-7.5h-3v-4.5z"
    />
  );

export default SvgChargingBatteryEmpty;
