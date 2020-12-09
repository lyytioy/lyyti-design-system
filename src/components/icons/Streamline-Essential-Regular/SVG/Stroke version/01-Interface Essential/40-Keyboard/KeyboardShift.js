import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardShift = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-shift_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-shift_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />,
    <path
      className="keyboard-shift_svg__a"
      d="M16.5 12h2.248a.75.75 0 00.531-1.28l-6.3-5.86a1.5 1.5 0 00-1.948 0L4.72 10.717A.75.75 0 005.25 12H7.5v6A1.5 1.5 0 009 19.5h6a1.5 1.5 0 001.5-1.5z"
    />
  );

export default SvgKeyboardShift;
