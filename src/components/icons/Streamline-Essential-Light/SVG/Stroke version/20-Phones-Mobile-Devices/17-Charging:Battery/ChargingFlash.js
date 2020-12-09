import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash_svg__a"
      d="M8 19.5a7.5 7.5 0 010-15M16 19.5a7.5 7.5 0 000-15"
    />,
    <path
      className="charging-flash_svg__a"
      d="M16.93 10.5a1 1 0 01.783 1.622L10.271 21.5l1.729-7H6.926a1 1 0 01-.818-1.575L13.437 2.5 12 10.5z"
    />
  );

export default SvgChargingFlash;
