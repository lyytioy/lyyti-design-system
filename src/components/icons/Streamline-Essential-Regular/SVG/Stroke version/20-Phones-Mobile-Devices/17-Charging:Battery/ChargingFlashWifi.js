import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlashWifi = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash-wifi_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash-wifi_svg__a"
      d="M13.535 9.75l-5.911 6.882a.375.375 0 00.286.618h2.625v6l5.91-6.882a.375.375 0 00-.285-.618h-2.625zM4.65 5.25a8.253 8.253 0 0114.7 0M15.437 7.5a3.75 3.75 0 00-6.874 0"
    />
  );

export default SvgChargingFlashWifi;
