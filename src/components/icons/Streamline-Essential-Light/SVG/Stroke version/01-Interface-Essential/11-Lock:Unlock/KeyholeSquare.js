import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyholeSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyhole-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="keyhole-square_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="keyhole-square_svg__a"
      d="M15.5 9a3.5 3.5 0 10-5.024 3.148L9 18.5h6l-1.478-6.352A3.5 3.5 0 0015.5 9z"
    />
  );

export default SvgKeyholeSquare;
