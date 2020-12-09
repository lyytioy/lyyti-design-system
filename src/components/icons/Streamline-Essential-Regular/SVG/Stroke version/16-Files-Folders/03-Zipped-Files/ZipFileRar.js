import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileRar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-rar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-rar_svg__a"
      d="M5.25 23.25h-3a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.439l5.871 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="zip-file-rar_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M8.25 23.25v-7.5M8.25 15.75h1.125a1.875 1.875 0 010 3.75H8.25M11.25 23.25L9 19.5M20.25 23.25v-7.5M20.25 15.75h1.125a1.875 1.875 0 010 3.75H20.25M23.25 23.25L21 19.5M14.25 23.25v-6a1.5 1.5 0 013 0v6M14.25 20.25h3"
    />
  );

export default SvgZipFileRar;
