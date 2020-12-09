import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonZigzag1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-zigzag-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-zigzag-1_svg__a"
      d="M4.5 21.748V4.5a3.75 3.75 0 017.5 0v15a3.75 3.75 0 107.5 0V2.248"
    />,
    <path
      className="button-zigzag-1_svg__a"
      d="M15.75 5.998l3.75-3.75 3.75 3.75M8.25 17.998l-3.75 3.75-3.75-3.75"
    />
  );

export default SvgButtonZigzag1;
