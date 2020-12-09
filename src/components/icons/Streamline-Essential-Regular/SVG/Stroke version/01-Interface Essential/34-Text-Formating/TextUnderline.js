import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextUnderline = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-underline_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="text-underline_svg__a"
      d="M.75 23.248h22.5M3.75.748h3M17.25.748h3M18.75.748V12a6.75 6.75 0 01-13.5 0V.748"
    />
  );

export default SvgTextUnderline;
