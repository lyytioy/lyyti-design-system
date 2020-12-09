import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardReturn1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-return-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-return-1_svg__a"
      d="M9 11.997h9M12.75 8.247L9 11.997l3.75 3.75"
    />,
    <rect
      className="keyboard-return-1_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />,
    <path className="keyboard-return-1_svg__a" d="M6 7.497v9" />
  );

export default SvgKeyboardReturn1;
