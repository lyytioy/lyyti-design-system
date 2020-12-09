import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardPageUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-page-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-page-up_svg__a"
      d="M6.5 5.497l5-5 5 5M11.5.497v23M6.5 13.497h10M6.5 10.497h10"
    />
  );

export default SvgKeyboardPageUp;
