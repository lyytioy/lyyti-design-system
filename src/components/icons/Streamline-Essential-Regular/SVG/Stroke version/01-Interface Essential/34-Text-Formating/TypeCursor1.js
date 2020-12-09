import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTypeCursor1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".type-cursor-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="type-cursor-1_svg__a"
      x={0.75}
      y={6.748}
      width={22.5}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="type-cursor-1_svg__a" d="M3.75 9.748v4.5" />
  );

export default SvgTypeCursor1;
