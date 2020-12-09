import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboard2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-2_svg__a"
      x={0.75}
      y={11.25}
      width={22.5}
      height={12}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="keyboard-2_svg__a"
      d="M4.5 17.25h15M4.5 14.25h15M6.75 11.25v-1.5a4.5 4.5 0 014.5-4.5H15a4.5 4.5 0 004.5-4.5M5.25 23.25v-3h13.5v3"
    />
  );

export default SvgKeyboard2;
