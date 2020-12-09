import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-zigzag-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="button-zigzag-1_svg__a" d="M1.5 15.999l3.5 3.5 3.5-3.5" />,
    <path
      className="button-zigzag-1_svg__a"
      d="M19 4.5V16a3.5 3.5 0 01-7 0V8a3.5 3.5 0 10-7 0v11.5"
    />,
    <path className="button-zigzag-1_svg__a" d="M22.5 7.999l-3.5-3.5-3.5 3.5" />
  );

export default SvgButtonZigzag1;
