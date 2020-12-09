import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlashWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash-wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash-wifi_svg__a"
      d="M12.479 11.5l-4 7.5h3v4.5l4-7.5h-3v-4.5zM20.5 7.827a12.526 12.526 0 00-17 0M1.021 4.538A17 17 0 0122.979 4.5M6.5 10.691a8 8 0 0111 0"
    />
  );

export default SvgChargingFlashWifi;
