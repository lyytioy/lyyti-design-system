import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryEco = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-battery-eco_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-battery-eco_svg__a"
      d="M13.5 18H18a1.5 1.5 0 001.5-1.5V15H21a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5h-1.5V9A1.5 1.5 0 0018 7.5h-1.5M5.25 7.5H3A1.5 1.5 0 001.5 9v7.5A1.5 1.5 0 003 18h2.25M9.221 14.8s2.514.629 3.772-1.257S12.75 7.5 14.25 6c-3.772 0-6.65 1.733-7.544 4.4-.628 1.887 0 3.772 2.515 4.4zM9.75 11.25A7.194 7.194 0 008.25 18"
    />
  );

export default SvgChargingBatteryEco;
