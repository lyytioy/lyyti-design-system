import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsBattery = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-battery_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-battery_svg__a"
      d="M15 3V1.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 009 1.5V3H6.75a1.5 1.5 0 00-1.5 1.5v17.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5zM5.25 13.5h13.5M9.75 18h4.5M9.75 8.25h4.5M12 6v4.5"
    />
  );

export default SvgElectronicsBattery;
