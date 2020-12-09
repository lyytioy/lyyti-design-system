import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBatteryCharge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".battery-charge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="battery-charge_svg__a"
      d="M6.75 3h-4.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h4.5M15.75 3h3a1.5 1.5 0 011.5 1.5V6h1.5a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-1.5v1.5a1.5 1.5 0 01-1.5 1.5h-3M11.25 13.5a3 3 0 01-3-3V9a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v1.5a3 3 0 01-3 3zM9.75 7.5v-3M12.75 7.5v-3M11.25 13.5V21"
    />
  );

export default SvgBatteryCharge;
