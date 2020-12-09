import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <rect
      className="mask-square_svg__a"
      x={5.25}
      y={5.25}
      width={13.5}
      height={13.5}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgMaskSquare;
