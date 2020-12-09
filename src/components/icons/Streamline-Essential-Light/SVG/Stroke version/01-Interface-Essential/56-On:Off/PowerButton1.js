import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-button-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="power-button-1_svg__a" cx={12} cy={11.999} r={11} />,
    <path className="power-button-1_svg__a" d="M12 16.499v-9.5" />
  );

export default SvgPowerButton1;
