import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardArrowReturn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-arrow-return_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-arrow-return_svg__a"
      d="M5.25 21.747l-4.5-4.5 4.5-4.5"
    />,
    <path
      className="keyboard-arrow-return_svg__a"
      d="M.75 17.247h15a7.5 7.5 0 000-15h-6"
    />
  );

export default SvgKeyboardArrowReturn;
