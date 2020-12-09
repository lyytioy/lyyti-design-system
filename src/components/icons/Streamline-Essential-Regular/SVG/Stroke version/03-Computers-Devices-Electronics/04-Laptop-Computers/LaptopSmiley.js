import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopSmiley = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-smiley_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-smiley_svg__a"
      d="M8.25 12.024a5.568 5.568 0 007.5 0M9.75 7.5V9M14.25 7.5V9"
    />,
    <path
      className="laptop-smiley_svg__a"
      d="M3 13.5V5.25a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v8.25M.75 16.5a3.75 3.75 0 003.75 3.75h15a3.75 3.75 0 003.75-3.75z"
    />
  );

export default SvgLaptopSmiley;
