import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardPageUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-page-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-page-up_svg__a"
      d="M12 23.247V.747M8.25 4.497L12 .747l3.75 3.75M7.5 11.247h9M7.5 14.247h9"
    />
  );

export default SvgKeyboardPageUp;
