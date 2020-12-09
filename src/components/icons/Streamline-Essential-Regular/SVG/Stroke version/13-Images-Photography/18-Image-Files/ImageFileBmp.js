import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileBmp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-bmp_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-bmp_svg__a"
      d="M3.375 23.25h-.75a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="image-file-bmp_svg__a"
      d="M20.625 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M6.375 23.25v-7.5M6.375 15.75h1.5a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5h-1.5M6.375 19.5h1.5a1.5 1.5 0 011.5 1.5v.75a1.5 1.5 0 01-1.5 1.5h-1.5M16.875 23.25v-7.5l-2.25 3.75-2.25-3.75v7.5M19.875 23.25v-7.5M19.875 15.75h.75a2.25 2.25 0 010 4.5h-.75"
    />
  );

export default SvgImageFileBmp;
