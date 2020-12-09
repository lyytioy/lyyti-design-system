import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileIso = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-iso_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-iso_svg__a"
      d="M8.241 23.254h-6a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5H12.87a1.5 1.5 0 011.06.439l5.87 5.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <path
      className="file-iso_svg__a"
      d="M20.241 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M11.241 23.254v-7.5M17.241 15.754h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M21.741 15.754a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 103 0v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgFileIso;
