import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="power-button_svg__a"
      d="M12 1.498v9.75M9 5.011a9 9 0 106 0"
    />
  );

export default SvgPowerButton;
