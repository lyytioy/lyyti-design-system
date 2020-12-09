import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextOptions = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-options_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-options_svg__a"
      d="M18.5 15.5L12.459 1.557a.5.5 0 00-.918 0L5.5 15.5M7.667 10.498h8.666M4 15.498h3M17 15.498h3"
    />,
    <rect
      className="text-options_svg__a"
      x={0.5}
      y={17.498}
      width={23}
      height={6}
      rx={1}
      ry={1}
    />,
    <path className="text-options_svg__a" d="M17 19.498l2 2 2-2" />
  );

export default SvgTextOptions;
