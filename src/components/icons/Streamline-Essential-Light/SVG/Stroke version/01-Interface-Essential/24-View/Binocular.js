import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBinocular = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".binocular_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="binocular_svg__a" cx={5.5} cy={18.5} r={5} />,
    <path
      className="binocular_svg__a"
      d="M10.5 7V3a2.281 2.281 0 00-3 0L6 7 4.5 8.5l-3 7"
    />,
    <circle className="binocular_svg__a" cx={18.5} cy={18.5} r={5} />,
    <path
      className="binocular_svg__a"
      d="M13.5 7V3.063a2.281 2.281 0 013 0L18 7l1.5 1.5 3 7M8 11c0-1.1 1.791-2 4-2s4 .895 4 2M10.5 18.5V9.145M13.5 18.5V9.145"
    />
  );

export default SvgBinocular;
