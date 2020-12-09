import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-square_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <rect
      className="mask-square_svg__a"
      x={5}
      y={5}
      width={14}
      height={14}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgMaskSquare;
