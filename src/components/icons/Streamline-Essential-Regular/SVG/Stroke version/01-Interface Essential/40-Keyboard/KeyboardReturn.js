import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardReturn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-return_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-return_svg__a"
      d="M6 13.5h7.5A4.5 4.5 0 0018 9V6.747"
    />,
    <path
      className="keyboard-return_svg__a"
      d="M9.75 9.747L6 13.497l3.75 3.75"
    />,
    <rect
      className="keyboard-return_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />
  );

export default SvgKeyboardReturn;
