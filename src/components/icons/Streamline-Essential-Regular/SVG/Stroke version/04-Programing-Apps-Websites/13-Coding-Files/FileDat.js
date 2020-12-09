import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileDat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-dat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-dat_svg__a"
      d="M5.25 23.254h-3a1.5 1.5 0 01-1.5-1.5v-19.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <path
      className="file-dat_svg__a"
      d="M20.25 8.254h-6a1.5 1.5 0 01-1.5-1.5v-6M8.25 23.254a3 3 0 003-3v-1.5a3 3 0 00-3-3zM14.25 23.254v-6a1.5 1.5 0 013 0v6M14.25 20.254h3M21.75 23.254v-7.5M20.25 15.754h3"
    />
  );

export default SvgFileDat;
