import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileTiff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-tiff_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-tiff_svg__a"
      d="M20.25 23.25v-6a1.5 1.5 0 011.5-1.5h1.5M20.25 20.25h2.25M6.75 23.25v-7.5M5.25 15.75h3M15.75 23.25v-7.5M14.25 15.75h3M3.75 23.25h-1.5a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="image-file-tiff_svg__a"
      d="M20.25 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M11.25 23.25v-7.5"
    />
  );

export default SvgImageFileTiff;
