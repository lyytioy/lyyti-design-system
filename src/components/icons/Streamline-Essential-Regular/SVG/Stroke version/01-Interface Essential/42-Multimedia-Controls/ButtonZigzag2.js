import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-zigzag-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-zigzag-2_svg__a"
      d="M3.5 23.248V11.255a1.5 1.5 0 012.588-1.033l8.325 9.553A1.5 1.5 0 0017 18.742V.748"
    />,
    <path
      className="button-zigzag-2_svg__a"
      d="M13.25 4.498L17 .748l3.75 3.75"
    />
  );

export default SvgButtonZigzag2;
