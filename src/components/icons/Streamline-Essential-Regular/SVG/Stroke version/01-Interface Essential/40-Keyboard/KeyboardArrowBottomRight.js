import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowBottomRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-bottom-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-bottom-right_svg__a"
      d="M.75.747l22.5 22.5M23.25 16.497v6.75H16.5"
    />
  );

export default SvgKeyboardArrowBottomRight;
