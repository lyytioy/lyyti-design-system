import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveSquare1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-square-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="remove-square-1_svg__a"
      d="M16.242 7.758l-8.485 8.485M16.242 16.243L7.757 7.758"
    />,
    <rect
      className="remove-square-1_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />
  );

export default SvgRemoveSquare1;
