import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="add-square_svg__a" d="M12 7.5v9M7.5 12h9" />,
    <rect
      className="add-square_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgAddSquare;
