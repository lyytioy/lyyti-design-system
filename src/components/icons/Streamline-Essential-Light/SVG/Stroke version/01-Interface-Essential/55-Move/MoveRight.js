import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-right_svg__a"
      d="M12.501 12.499h11M19.501 8.499l4 4-4 4"
    />,
    <rect
      className="move-right_svg__a"
      x={0.501}
      y={0.499}
      width={7}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgMoveRight;
