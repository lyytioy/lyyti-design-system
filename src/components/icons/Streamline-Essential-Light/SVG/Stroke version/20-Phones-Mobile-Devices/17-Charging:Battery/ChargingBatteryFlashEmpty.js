import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryFlashEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-flash-empty_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-flash-empty_svg__a"
      d="M14.5 6.5h5a1 1 0 011 1v2h2a1 1 0 011 1v3a1 1 0 01-1 1h-2v2a1 1 0 01-1 1h-5M9.5 17.5h-8a1 1 0 01-1-1v-9a1 1 0 011-1h7M3.5 8.5v7"
    />,
    <path
      className="charging-battery-flash-empty_svg__a"
      d="M12.5 6l-4 7.5h3V18l4-7.5h-3V6z"
    />
  );

export default SvgChargingBatteryFlashEmpty;
