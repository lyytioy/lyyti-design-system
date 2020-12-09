import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard_svg__a"
      x={0.75}
      y={11.25}
      width={22.5}
      height={12}
      rx={3}
      ry={3}
    />,
    <path
      className="keyboard_svg__a"
      d="M6.75 14.25h1.5M15.75 14.25h1.5M11.25 14.25h1.5M4.5 17.25H6M9 17.25h1.5M13.5 17.25H15M18 17.25h1.5M6.75 20.25h10.5M6.75 11.25v-1.5a4.5 4.5 0 014.5-4.5H15a4.5 4.5 0 004.5-4.5"
    />
  );

export default SvgKeyboard;
