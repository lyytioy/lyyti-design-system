import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlashWave = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash-wave_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash-wave_svg__a"
      d="M13.535 5.25l-5.911 6.882a.375.375 0 00.286.618h2.625v6l5.91-6.882a.375.375 0 00-.285-.618h-2.625zM5.25 4.65a8.253 8.253 0 000 14.7M6.75 7.256a5.252 5.252 0 000 9.489M18.75 4.65a8.252 8.252 0 010 14.7M17.25 7.256a5.252 5.252 0 010 9.489"
    />
  );

export default SvgChargingFlashWave;
