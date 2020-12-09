import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-left_svg__a"
      d="M23.25 12.497H.75M4.5 16.247l-3.75-3.75 3.75-3.75"
    />
  );

export default SvgKeyboardArrowLeft;
