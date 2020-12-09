import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTypeCursor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".type-cursor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="type-cursor-1_svg__a"
      x={0.5}
      y={7.498}
      width={23}
      height={9}
      rx={1}
      ry={1}
    />,
    <path className="type-cursor-1_svg__a" d="M3.5 9.498v5" />
  );

export default SvgTypeCursor1;
