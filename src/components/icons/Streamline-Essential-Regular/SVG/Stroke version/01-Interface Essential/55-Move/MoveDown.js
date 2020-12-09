import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-down_svg__a"
      d="M12 23.248v-10.5M8.25 19.498l3.75 3.75 3.75-3.75"
    />,
    <rect
      className="move-down_svg__a"
      x={0.75}
      y={0.748}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMoveDown;
