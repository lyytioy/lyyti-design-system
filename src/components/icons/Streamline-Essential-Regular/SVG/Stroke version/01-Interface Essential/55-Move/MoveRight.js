import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-right_svg__a"
      d="M23.25 11.998h-10.5M19.5 15.748l3.75-3.75-3.75-3.75"
    />,
    <rect
      className="move-right_svg__a"
      x={0.75}
      y={0.748}
      width={7.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMoveRight;
