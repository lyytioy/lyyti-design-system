import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-next_svg__a"
      d="M.5 12.497h19M13.5 18.497l6-6-6-6M23.5 6.497v12"
    />
  );

export default SvgKeyboardArrowNext;
