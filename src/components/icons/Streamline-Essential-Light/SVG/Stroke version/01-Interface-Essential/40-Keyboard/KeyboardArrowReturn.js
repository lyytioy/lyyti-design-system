import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowReturn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-return_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-return_svg__a"
      d="M12 4.5h5a6.5 6.5 0 010 13H.5"
    />,
    <path className="keyboard-arrow-return_svg__a" d="M5.5 22.497l-5-5 5-5" />
  );

export default SvgKeyboardArrowReturn;
