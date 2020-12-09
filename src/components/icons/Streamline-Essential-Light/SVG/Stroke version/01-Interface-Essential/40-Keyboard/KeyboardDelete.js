import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-delete_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-delete_svg__a"
      x={0.498}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path
      className="keyboard-delete_svg__a"
      d="M14.498 10.497l-3 3M14.498 13.497l-3-3M18.5 15a.5.5 0 01-.5.5H8.205a.5.5 0 01-.353-.146l-3-3a.5.5 0 010-.707l3-3a.5.5 0 01.353-.147H18a.5.5 0 01.5.5z"
    />
  );

export default SvgKeyboardDelete;
