import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileDmg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-dmg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-dmg_svg__a"
      d="M3.74 23.254h-1.5a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.439l5.87 5.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <path
      className="file-dmg_svg__a"
      d="M20.24 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M22.49 20.254h.75v1.5a1.5 1.5 0 01-3 0v-4.5a1.5 1.5 0 011.5-1.5h1.5M17.24 23.254v-7.5l-2.25 3.75-2.25-3.75v7.5M6.74 23.254a3 3 0 003-3v-1.5a3 3 0 00-3-3z"
    />
  );

export default SvgFileDmg;
