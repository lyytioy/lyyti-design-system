import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subtract-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="subtract-square_svg__a" d="M18 12H6" />,
    <rect
      className="subtract-square_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />
  );

export default SvgSubtractSquare;
