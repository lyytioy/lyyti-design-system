import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsBattery = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-battery_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-battery_svg__a"
      d="M17.5 2.5h-2v-1a1 1 0 00-1-1h-5a1 1 0 00-1 1v1h-2a1 1 0 00-1 1v19a1 1 0 001 1h11a1 1 0 001-1v-19a1 1 0 00-1-1zM5.5 13.5h13M14.5 7.5h-5M14.5 18.5h-5M12 5v5"
    />
  );

export default SvgElectronicsBattery;
