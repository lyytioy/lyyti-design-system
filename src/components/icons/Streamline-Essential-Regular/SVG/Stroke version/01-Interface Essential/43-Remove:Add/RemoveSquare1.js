import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveSquare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-square-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="remove-square-1_svg__a"
      d="M15.182 8.818l-6.364 6.363M8.818 8.818l6.364 6.363"
    />,
    <rect
      className="remove-square-1_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgRemoveSquare1;
