import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowBottomLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-bottom-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-bottom-left_svg__a"
      d="M7.5 23.497h-7v-7M.5 23.497l16-16"
    />
  );

export default SvgKeyboardArrowBottomLeft;
