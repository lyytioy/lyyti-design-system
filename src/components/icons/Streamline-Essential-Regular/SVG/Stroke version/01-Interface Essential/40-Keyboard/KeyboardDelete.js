import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-delete_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-delete_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />,
    <path
      className="keyboard-delete_svg__a"
      d="M16.5 9.747l-4.5 4.5M12 9.747l4.5 4.5M11.121 6H18a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0118 18h-6.879a1.5 1.5 0 01-1.06-.439L4.72 12.527a.749.749 0 010-1.06l5.341-5.031A1.5 1.5 0 0111.121 6z"
    />
  );

export default SvgKeyboardDelete;
