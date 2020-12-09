import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowTopRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-top-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-top-right_svg__a"
      d="M16.499.497h7v7M23.499.497l-16 16"
    />
  );

export default SvgKeyboardArrowTopRight;
