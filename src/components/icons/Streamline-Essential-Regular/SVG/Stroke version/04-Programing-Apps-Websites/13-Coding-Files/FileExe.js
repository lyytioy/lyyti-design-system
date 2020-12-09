import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileExe = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-exe_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-exe_svg__a"
      d="M5.244 23.254h-3a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L19.8 7.064a1.5 1.5 0 01.44 1.061v4.629"
    />,
    <path
      className="file-exe_svg__a"
      d="M20.244 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M11.244 23.254h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M8.244 20.254h3M23.244 23.254h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M20.244 20.254h3M14.244 15.754l3 7.5M17.244 15.754l-3 7.5"
    />
  );

export default SvgFileExe;
