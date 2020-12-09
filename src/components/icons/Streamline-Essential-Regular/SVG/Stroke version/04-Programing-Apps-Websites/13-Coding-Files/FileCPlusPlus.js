import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCPlusPlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-c-plus-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-c-plus-plus_svg__a"
      d="M.75 12.753v-10.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.44l5.872 5.871a1.5 1.5 0 01.439 1.061v4.628"
    />,
    <path
      className="file-c-plus-plus_svg__a"
      d="M20.25 8.253h-6a1.5 1.5 0 01-1.5-1.5v-6M5.25 15.753a3 3 0 00-3 3v1.5a3 3 0 003 3M8.25 20.253h6M11.25 23.253v-6M17.25 20.253h6M20.25 23.253v-6"
    />
  );

export default SvgFileCPlusPlus;
