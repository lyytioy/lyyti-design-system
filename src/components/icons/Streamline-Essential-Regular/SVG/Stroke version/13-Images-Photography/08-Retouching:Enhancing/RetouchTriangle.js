import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="retouch-triangle_svg__a"
      d="M4.233 23.25a1.5 1.5 0 01-1.265-2.307l7.791-12.206a1.5 1.5 0 012.531 0l7.744 12.206a1.5 1.5 0 01-1.267 2.3zM11.996 3.308V.75M8.246 5.145L6.102 3.75M15.746 5.145L17.89 3.75"
    />
  );

export default SvgRetouchTriangle;
