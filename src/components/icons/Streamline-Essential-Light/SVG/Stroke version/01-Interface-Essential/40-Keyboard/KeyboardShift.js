import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardShift = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-shift_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-shift_svg__a"
      x={0.5}
      y={0.497}
      width={23}
      height={23}
      rx={4}
      ry={4}
    />,
    <path
      className="keyboard-shift_svg__a"
      d="M14 19.5a.5.5 0 00.5-.5v-6.5h3.4a.5.5 0 00.376-.829l-5.9-6.741a.5.5 0 00-.752 0l-5.9 6.741a.5.5 0 00.376.829h3.4V19a.5.5 0 00.5.5z"
    />
  );

export default SvgKeyboardShift;
