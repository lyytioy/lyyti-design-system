import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardPageDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-page-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-page-down_svg__a"
      d="M11.75 23.247V.747M8 19.497l3.75 3.75 3.75-3.75M7.25 11.247h9M7.25 14.247h9"
    />
  );

export default SvgKeyboardPageDown;
