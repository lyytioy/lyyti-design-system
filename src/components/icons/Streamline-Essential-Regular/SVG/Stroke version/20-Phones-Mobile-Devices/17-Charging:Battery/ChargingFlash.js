import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charging-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="charging-flash_svg__a"
      d="M12.75 6L7.5 12.75h3.75V18l5.25-6.75h-3.75V6zM7.5 18.75A6.75 6.75 0 01.75 12 6.75 6.75 0 017.5 5.25M16.5 5.25A6.75 6.75 0 0123.25 12a6.75 6.75 0 01-6.75 6.75"
    />
  );

export default SvgChargingFlash;
