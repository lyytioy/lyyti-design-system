import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardReturn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-return_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-return_svg__a"
      x={0.5}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path className="keyboard-return_svg__a" d="M6.5 12.5h10a1 1 0 001-1v-3" />,
    <path className="keyboard-return_svg__a" d="M9.5 9.497l-3 3 3 3" />
  );

export default SvgKeyboardReturn;
