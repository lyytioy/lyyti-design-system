import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-button-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="power-button-2_svg__a"
      x={10.5}
      y={7.498}
      width={3}
      height={9}
      rx={0.75}
      ry={0.75}
    />,
    <circle className="power-button-2_svg__a" cx={12} cy={11.998} r={11.25} />
  );

export default SvgPowerButton2;
