import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-circle_svg__a"
      d="M6.75 9l3.294 4.611a1.526 1.526 0 002.414.09L23.25.749M16.783 3.824A10.487 10.487 0 1020.8 8.377"
    />
  );

export default SvgCheckCircle;
