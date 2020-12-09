import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileEps = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-eps_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-eps_svg__a"
      d="M4.875 23.25h-2.25a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l5.872 5.872a1.5 1.5 0 01.439 1.06v4.629"
    />,
    <path
      className="image-file-eps_svg__a"
      d="M20.625 8.25h-6a1.5 1.5 0 01-1.5-1.5v-6M10.875 23.25h-1.5a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h1.5M7.875 20.25h3M13.875 23.25v-7.5M13.875 15.75h.75a2.25 2.25 0 010 4.5h-.75M22.875 15.75h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5"
    />
  );

export default SvgImageFileEps;
