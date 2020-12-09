import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="remove-square_svg__a"
      x={0.5}
      y={0.499}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="remove-square_svg__a"
      d="M7 16.999l10-10M17 16.999l-10-10"
    />
  );

export default SvgRemoveSquare;
