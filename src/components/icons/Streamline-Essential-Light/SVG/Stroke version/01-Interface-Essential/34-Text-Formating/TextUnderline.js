import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextUnderline = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-underline_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-underline_svg__a"
      d="M.5 23.498h23M4.5.5V12a7.5 7.5 0 0015 0V.5M1.5.498h6M16.5.498h6"
    />
  );

export default SvgTextUnderline;
