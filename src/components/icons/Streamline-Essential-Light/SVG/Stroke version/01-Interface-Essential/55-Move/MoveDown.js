import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-down_svg__a"
      d="M12.5 12.499v11M16.5 19.499l-4 4-4-4"
    />,
    <rect
      className="move-down_svg__a"
      x={0.5}
      y={0.499}
      width={23}
      height={7}
      rx={1}
      ry={1}
    />
  );

export default SvgMoveDown;
