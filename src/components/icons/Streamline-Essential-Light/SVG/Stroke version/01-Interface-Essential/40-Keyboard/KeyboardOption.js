import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardOption = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-option_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-option_svg__a"
      x={0.5}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path
      className="keyboard-option_svg__a"
      d="M3.5 9.5h4.586a1 1 0 01.707.293l6.414 6.407a1 1 0 00.707.293H20.5M14.5 9.497h6"
    />
  );

export default SvgKeyboardOption;
