import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-square_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-square_svg__a"
      d="M6.75 9l3.294 4.611a1.526 1.526 0 002.414.09L23.25.749"
    />,
    <path
      className="check-square_svg__a"
      d="M21.75 10.5v9.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-15a3 3 0 013-3H16.5"
    />
  );

export default SvgCheckSquare;
