import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyholeSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyhole-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="keyhole-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <circle className="keyhole-square_svg__a" cx={12} cy={9.75} r={2.25} />,
    <path className="keyhole-square_svg__a" d="M12 12v4.5" />
  );

export default SvgKeyholeSquare;
