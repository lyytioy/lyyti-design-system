import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="power-button_svg__a"
      d="M14.5 6.5a6.5 6.5 0 11-5.03.014M12 4.499v6.5"
    />
  );

export default SvgPowerButton;
