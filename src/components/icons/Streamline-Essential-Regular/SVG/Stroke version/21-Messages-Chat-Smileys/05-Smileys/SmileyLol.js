import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLol = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-lol_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-lol_svg__a"
      d="M6.505 14.25c.521 3 2.791 5.25 5.513 5.25s4.991-2.255 5.512-5.25a23.481 23.481 0 01-11.025 0zM18.511 9a2.25 2.25 0 00-4.243 0M9.768 9a2.25 2.25 0 00-4.243 0M22.851 9A11.237 11.237 0 001.185 9M1.707 16.5a11.25 11.25 0 0020.622 0M22.884 12.134a1.25 1.25 0 11-1.768 1.766 8.277 8.277 0 01-.884-2.652 8.269 8.269 0 012.652.886zM1.116 12.134A1.25 1.25 0 102.884 13.9a8.277 8.277 0 00.884-2.652 8.269 8.269 0 00-2.652.886z"
    />
  );

export default SvgSmileyLol;
