import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerButton2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-button-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="power-button-2_svg__a" cx={11.999} cy={11.999} r={11} />,
    <rect
      className="power-button-2_svg__a"
      x={10}
      y={6.999}
      width={4}
      height={11}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgPowerButton2;
