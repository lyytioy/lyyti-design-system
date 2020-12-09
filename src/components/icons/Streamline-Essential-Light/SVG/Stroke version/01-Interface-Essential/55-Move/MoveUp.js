import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-up_svg__a"
      d="M11.501 11.499v-11M7.501 4.499l4-4 4 4"
    />,
    <rect
      className="move-up_svg__a"
      x={0.501}
      y={16.499}
      width={23}
      height={7}
      rx={1}
      ry={1}
    />
  );

export default SvgMoveUp;
