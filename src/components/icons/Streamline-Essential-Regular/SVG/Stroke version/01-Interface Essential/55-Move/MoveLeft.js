import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-left_svg__a"
      d="M.75 11.998h10.5M4.5 8.248l-3.75 3.75 3.75 3.75"
    />,
    <rect
      className="move-left_svg__a"
      x={15.75}
      y={0.748}
      width={7.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMoveLeft;
