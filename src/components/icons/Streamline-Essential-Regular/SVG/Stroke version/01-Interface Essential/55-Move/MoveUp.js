import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="move-up_svg__a"
      d="M12 .748v10.5M8.25 4.498L12 .748l3.75 3.75"
    />,
    <rect
      className="move-up_svg__a"
      x={0.75}
      y={15.748}
      width={22.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgMoveUp;
