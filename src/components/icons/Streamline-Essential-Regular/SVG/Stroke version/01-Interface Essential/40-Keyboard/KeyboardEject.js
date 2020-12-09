import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardEject = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-eject_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-eject_svg__a"
      x={1.5}
      y={1.497}
      width={21}
      height={21}
      rx={3}
      ry={3}
    />,
    <rect
      className="keyboard-eject_svg__a"
      x={6}
      y={14.997}
      width={12}
      height={3}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="keyboard-eject_svg__a"
      d="M11.47 6.527l-4.83 4.83a.375.375 0 00.265.64H17.1a.375.375 0 00.265-.64l-4.83-4.83a.749.749 0 00-1.065 0z"
    />
  );

export default SvgKeyboardEject;
