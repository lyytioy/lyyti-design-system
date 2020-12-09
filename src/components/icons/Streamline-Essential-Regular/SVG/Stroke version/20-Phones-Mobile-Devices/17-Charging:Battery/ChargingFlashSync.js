import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlashSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash-sync_svg__a"
      d="M12.75 6L7.5 12.75h3.75V18l5.25-6.75h-3.75V6z"
    />,
    <path
      className="charging-flash-sync_svg__a"
      d="M18.707 6A9 9 0 003 12v.75M5.293 18A9 9 0 0021 12v-.75"
    />,
    <path
      className="charging-flash-sync_svg__a"
      d="M18.75 13.5L21 11.25l2.25 2.25M5.25 10.5L3 12.75.75 10.5"
    />
  );

export default SvgChargingFlashSync;
