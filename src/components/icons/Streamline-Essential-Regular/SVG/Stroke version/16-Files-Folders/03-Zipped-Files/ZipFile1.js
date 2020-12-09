import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFile1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-1_svg__a"
      d="M8.25 23.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="zip-file-1_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M11.25 15.75h1.892a.75.75 0 01.7 1.028l-2.178 5.443a.751.751 0 00.7 1.029h1.886M17.25 23.25v-7.5M20.25 23.25v-7.5M20.25 15.75H21a2.25 2.25 0 010 4.5h-.75"
    />
  );

export default SvgZipFile1;
