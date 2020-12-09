import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-zigzag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-zigzag_svg__a"
      d="M5 20.5h11.5a3.5 3.5 0 100-7h-9a3.5 3.5 0 010-7H20"
    />,
    <path className="button-zigzag_svg__a" d="M16 2.499l4 4-4 4" />
  );

export default SvgButtonZigzag;
