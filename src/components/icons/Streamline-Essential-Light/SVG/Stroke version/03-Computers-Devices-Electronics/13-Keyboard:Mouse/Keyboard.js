import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={10}
      rx={2}
      ry={2}
    />,
    <path
      className="keyboard_svg__a"
      d="M3.5 13.5v-1a3 3 0 013-3H20a3.5 3.5 0 000-7h-6.5A1.5 1.5 0 0112 1V.5M4 20.5h1M4 18.5h1M7 18.5h1M10 18.5h1M13 18.5h1M16 18.5h1M19 18.5h1M4 16.5h1M7 16.5h1M10 16.5h1M13 16.5h1M16 16.5h1M19 16.5h1M7 20.5h10M19 20.5h1"
    />
  );

export default SvgKeyboard;
