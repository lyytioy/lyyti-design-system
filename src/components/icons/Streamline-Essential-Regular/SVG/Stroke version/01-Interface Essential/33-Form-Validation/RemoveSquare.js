import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="remove-square_svg__a"
      x={0.75}
      y={0.749}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="remove-square_svg__a"
      d="M7.5 16.499l9-9M16.5 16.499l-9-9"
    />
  );

export default SvgRemoveSquare;
