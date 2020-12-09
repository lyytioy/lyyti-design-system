import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-left_svg__a"
      d="M11.5 11.499H.5M4.5 15.499l-4-4 4-4"
    />,
    <rect
      className="move-left_svg__a"
      x={16.5}
      y={0.499}
      width={7}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgMoveLeft;
