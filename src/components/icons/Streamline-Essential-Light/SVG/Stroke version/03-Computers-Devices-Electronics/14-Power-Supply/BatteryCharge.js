import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBatteryCharge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".battery-charge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="battery-charge_svg__a"
      d="M16.5 4.5h4a1 1 0 011 1v2h2v5h-2v2a1 1 0 01-1 1h-5M7.5 15.5h-6a1 1 0 01-1-1v-9a1 1 0 011-1h5M13 13.5h-3A1.5 1.5 0 018.5 12V7.5h6V12a1.5 1.5 0 01-1.5 1.5zM11.5 13.5v6M9.5 7.5v-3M13.5 7.5v-3"
    />
  );

export default SvgBatteryCharge;
