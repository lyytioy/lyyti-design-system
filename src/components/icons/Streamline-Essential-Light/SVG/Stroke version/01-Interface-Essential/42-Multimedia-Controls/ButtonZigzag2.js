import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-zigzag-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="button-zigzag-2_svg__a" d="M13 4.999l3.5-3.5 3.5 3.5" />,
    <path
      className="button-zigzag-2_svg__a"
      d="M7.5 23V12.867a1 1 0 011.555-.832l5.89 3.927a1 1 0 001.555-.832V1.5"
    />
  );

export default SvgButtonZigzag2;
