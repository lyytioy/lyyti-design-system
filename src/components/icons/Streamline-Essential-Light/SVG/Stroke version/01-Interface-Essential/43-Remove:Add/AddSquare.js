import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="add-square_svg__a" d="M12 6v12M18 12H6" />,
    <rect
      className="add-square_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />
  );

export default SvgAddSquare;
