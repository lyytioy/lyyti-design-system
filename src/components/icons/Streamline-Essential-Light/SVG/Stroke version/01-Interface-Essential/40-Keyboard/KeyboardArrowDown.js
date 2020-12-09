import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-down_svg__a"
      d="M16.5 18.497l-5 5-5-5M11.5 23.497v-23"
    />
  );

export default SvgKeyboardArrowDown;
