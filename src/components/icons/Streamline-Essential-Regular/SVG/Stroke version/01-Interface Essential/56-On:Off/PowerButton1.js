import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-button-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="power-button-1_svg__a" d="M12 8.248v7.5" />,
    <circle className="power-button-1_svg__a" cx={12} cy={11.998} r={11.25} />
  );

export default SvgPowerButton1;
