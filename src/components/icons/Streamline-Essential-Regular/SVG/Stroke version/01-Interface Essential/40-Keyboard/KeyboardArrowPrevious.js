import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-previous_svg__a"
      d="M23.25 11.997h-18M9 15.747l-3.75-3.75L9 8.247M.75 1.497v21"
    />
  );

export default SvgKeyboardArrowPrevious;
