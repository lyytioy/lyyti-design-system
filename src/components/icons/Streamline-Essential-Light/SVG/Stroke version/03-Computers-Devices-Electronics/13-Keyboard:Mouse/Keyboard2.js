import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboard2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyboard-2_svg__a"
      x={0.5}
      y={13.5}
      width={23}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="keyboard-2_svg__a"
      d="M4.5 21.5h15v2h-15zM2.5 15.5h19M2.5 17.5h19M2.5 19.5h19M4.5 13.5v-2a3 3 0 013-3h13a3 3 0 000-6H14a2 2 0 01-2-2"
    />
  );

export default SvgKeyboard2;
