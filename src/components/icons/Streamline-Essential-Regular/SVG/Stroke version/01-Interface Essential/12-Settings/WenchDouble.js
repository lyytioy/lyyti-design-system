import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWenchDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wench-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="wench-double_svg__a"
      d="M9.4 16.742L16.739 9.4a4.55 4.55 0 006.066-6.066L21.38 4.763a1.516 1.516 0 01-2.144-2.144l1.424-1.425a4.55 4.55 0 00-6.066 6.066L7.257 14.6a4.55 4.55 0 00-6.066 6.066l1.425-1.424a1.516 1.516 0 012.144 2.141l-1.424 1.425A4.55 4.55 0 009.4 16.742z"
    />,
    <path
      className="wench-double_svg__a"
      d="M7.787 9.935l-.53-.53a4.55 4.55 0 01-6.066-6.066l1.425 1.424A1.516 1.516 0 004.76 2.619L3.336 1.194A4.55 4.55 0 019.4 7.26l.452.453M16.109 13.968l.63.629a4.55 4.55 0 016.066 6.066l-1.425-1.424a1.516 1.516 0 00-2.144 2.144l1.424 1.425a4.55 4.55 0 01-6.066-6.066l-.629-.63"
    />
  );

export default SvgWenchDouble;
