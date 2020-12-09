import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-previous_svg__a"
      d="M23.5 12.497h-19M10.5 6.497l-6 6 6 6M.5 18.497v-12"
    />
  );

export default SvgKeyboardArrowPrevious;
